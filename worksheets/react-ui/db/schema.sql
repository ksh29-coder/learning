-- Parent-monitoring event store.
--
-- Run this ONCE in the Supabase SQL editor (Dashboard -> SQL -> New query).
-- One wide table holds every telemetry event; the flexible bits live in `payload`
-- (jsonb) so new event types never need a migration. The serverless functions
-- use the service_role key, which bypasses row-level security, so RLS below only
-- needs to lock OUT the public anon/authenticated roles - it is a safety net in
-- case the anon key is ever pointed at this table.

create table if not exists public.events (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  profile     text        not null,
  type        text        not null,
  day         integer,
  session_id  text,
  client_ts   timestamptz,
  payload     jsonb       not null default '{}'::jsonb
);

-- The dashboard reads "all events for a profile, newest first".
create index if not exists events_profile_id_idx on public.events (profile, id desc);
create index if not exists events_type_idx        on public.events (type);
create index if not exists events_created_at_idx  on public.events (created_at);

-- Lock the table down. Our backend uses the service_role key (which ignores
-- RLS), so enabling RLS with NO permissive policies means anon/authenticated
-- callers get nothing - exactly what we want for a public-facing project.
alter table public.events enable row level security;
