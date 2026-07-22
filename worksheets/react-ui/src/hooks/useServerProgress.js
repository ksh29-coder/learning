import { useState, useEffect } from 'react';
import { fetchServerProgress } from '../lib/serverProgress';

// This profile's server-side progress, as { [day]: { checkedQuestions, answers } }.
// Starts {} and fills in when the shared fetch resolves, so the day picker
// paints immediately from localStorage and only then reveals work done on
// other devices. Never rejects - a failure just leaves badges local-only.
export function useServerProgress(profile) {
  const [days, setDays] = useState({});

  useEffect(() => {
    let cancelled = false;
    setDays({});

    fetchServerProgress(profile).then((data) => {
      if (!cancelled) setDays(data || {});
    });

    return () => {
      cancelled = true;
    };
  }, [profile]);

  return days;
}
