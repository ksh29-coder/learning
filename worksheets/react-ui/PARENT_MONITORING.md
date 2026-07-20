# Parent monitoring

An optional way for a parent to see how the kids are doing with the course —
**from any device**, not just the one the kids use. It records what they do into
a Supabase table and shows it on a PIN-protected `/parent` dashboard.

It is completely optional and off by default. With the flag off, no events are
collected and the app behaves exactly as it always has. Nothing a child does
ever waits on the network — telemetry is fire-and-forget.

## What gets recorded

| Event | What it captures |
|---|---|
| `answer_attempt` | **Every** Check Answer, in order — the typed answer, right/wrong, and whether the local matcher or the AI graded it |
| `day_view` | **Active** time on each day (pauses when the tab is hidden or the kid is idle, so an open tab overnight doesn't count) |
| `chat_message` | Each turn of the AI-teacher conversation (child question + teacher reply) |
| `session_start` | A marker each time the app is opened / the profile is switched |

The dashboard turns these into: per-day completion & accuracy, total active
time, an in-order timeline of every attempt, and the full chat history — one
panel per kid.

## One-time setup

### 1. Create the Supabase table

1. Make a free project at [supabase.com](https://supabase.com).
2. Open **SQL Editor → New query**, paste [`db/schema.sql`](db/schema.sql), run it.
3. Copy **Project Settings → API → Project URL** and the **`service_role`** key.

### 2. Set environment variables (Vercel → Project → Settings → Environment Variables)

```
REACT_APP_TELEMETRY_ENABLED=1          # turns on client-side collection (safe to expose)
SUPABASE_URL=https://xxxx.supabase.co  # server only
SUPABASE_SERVICE_ROLE_KEY=eyJ...       # SERVER ONLY - never a REACT_APP_ prefix
PARENT_PIN=some-pin-the-kids-dont-know # gates the /parent dashboard
```

Telemetry ingest reuses the existing `AI_FAMILY_PASSPHRASE` as its write gate,
so make sure that is set too (it already is if the AI teacher is on). The kids
type that family password once in the AI panel; after that, events flush
automatically.

Redeploy after adding the variables (CRA bakes `REACT_APP_*` in at build time).

### 3. Open the dashboard

Visit `/parent` on your deployment (e.g. `https://your-app.vercel.app/parent`)
and enter the `PARENT_PIN`. The kids' app has no link to it.

## Security notes

- `SUPABASE_SERVICE_ROLE_KEY` and `PARENT_PIN` live only in server-side env vars;
  they are never in the JS bundle.
- The `/api/parent` read endpoint **fails closed**: with no `PARENT_PIN` set it
  refuses to serve rather than expose data.
- The `/api/track` write endpoint **fails closed** too: if Supabase is configured
  but `AI_FAMILY_PASSPHRASE` is not, it refuses to serve.
- The event table has row-level security enabled with no public policies, so the
  anon key cannot read or write it — only the server's service_role key can.

## Turning it off

Unset `REACT_APP_TELEMETRY_ENABLED` (or set it to `0`) and redeploy. Collection
stops immediately. Existing rows stay in Supabase until you delete them there.
