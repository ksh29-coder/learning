// Measures ACTIVE time a kid spends on a given day, and reports it as `day_view`
// telemetry events. "Active" means the tab is visible AND there has been user
// interaction recently - so a browser left open overnight does not count as ten
// hours of studying.
//
// It emits when the day (or profile) changes, on a periodic checkpoint so a very
// long sitting is not lost if the tab is killed, and on page-hide. Everything is
// gated on the telemetry flag: with it off the effect returns immediately and no
// listeners or timers are created.

import { useEffect } from 'react';
import { track, isTelemetryEnabled } from '../lib/telemetry';

const IDLE_MS = 60000; // no interaction for this long => "not studying"
const CHECKPOINT_MS = 60000; // bank accumulated time at least this often

export function usePageTimer(profile, day) {
  useEffect(() => {
    if (!isTelemetryEnabled() || typeof window === 'undefined') return undefined;
    if (!profile || !day) return undefined;

    let activeSeconds = 0;
    let lastActivity = Date.now();

    const bump = () => {
      lastActivity = Date.now();
    };
    const interactionEvents = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    interactionEvents.forEach((e) => window.addEventListener(e, bump, { passive: true }));

    const tick = setInterval(() => {
      const visible = document.visibilityState === 'visible';
      const idle = Date.now() - lastActivity > IDLE_MS;
      if (visible && !idle) activeSeconds += 1;
    }, 1000);

    // Report and reset. Kept small and idempotent so it is safe to call from the
    // checkpoint, on hide, and on cleanup without double-counting.
    const emit = () => {
      if (activeSeconds > 0) {
        track('day_view', { profile, day, seconds: activeSeconds });
        activeSeconds = 0;
      }
    };

    const checkpoint = setInterval(emit, CHECKPOINT_MS);
    const onHide = () => {
      if (document.visibilityState === 'hidden') emit();
    };
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', emit);

    return () => {
      clearInterval(tick);
      clearInterval(checkpoint);
      interactionEvents.forEach((e) => window.removeEventListener(e, bump));
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', emit);
      emit();
    };
  }, [profile, day]);
}
