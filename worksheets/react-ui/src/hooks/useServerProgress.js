import { useState, useEffect } from 'react';
import { isTelemetryEnabled } from '../lib/telemetry';

const PASSPHRASE_KEY = 'ai_family_key'; // same shared secret telemetry.js uses

// Fetches this profile's cross-device day progress from /api/progress, so the
// day-picker badges can reflect work done on another browser/device instead of
// only this one's localStorage. Best-effort by design (same spirit as
// telemetry.js): with the feature off, unconfigured, or the request failing,
// this resolves to {} and callers just fall back to local-only progress -
// nothing here is allowed to block or break the day picker.
export function useServerProgress(profile) {
  const [dayQuestions, setDayQuestions] = useState({});

  useEffect(() => {
    let cancelled = false;
    setDayQuestions({});

    if (!isTelemetryEnabled() || !profile) return undefined;

    let passphrase = '';
    try {
      passphrase = localStorage.getItem(PASSPHRASE_KEY) || '';
    } catch (e) {
      /* no-op - proceed without it, server will 401 and we fall back */
    }

    fetch('/api/progress', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-family-key': passphrase },
      body: JSON.stringify({ profile })
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && data.dayQuestions) setDayQuestions(data.dayQuestions);
      })
      .catch(() => {
        /* non-fatal - badges just stay local-only for this session */
      });

    return () => {
      cancelled = true;
    };
  }, [profile]);

  return dayQuestions;
}
