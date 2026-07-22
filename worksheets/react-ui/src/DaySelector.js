import React, { useState, useEffect } from 'react';
import App from './App';
import Day2App from './Day2App';
import Day3App from './Day3App';
import Day4App from './Day4App';
import Day5App from './Day5App';
import Day6App from './Day6App';
import Day7App from './Day7App';
import Day8App from './Day8App';
import Day9App from './Day9App';
import { DEFAULT_PROFILE, getMergedDayProgress } from './hooks/useWorksheetStorage';
import { usePageTimer } from './hooks/usePageTimer';
import { useServerProgress } from './hooks/useServerProgress';
import { track } from './lib/telemetry';
import AiTeacher from './components/AiTeacher';
import './DaySelector.css';

const PROFILES = [
  { id: 'michael', label: 'Michael', icon: '👦' },
  { id: 'isabella', label: 'Isabella', icon: '👧' }
];

const DAYS = [
  { day: 1, label: 'Day 1: My First Python Program', icon: '📚' },
  { day: 2, label: 'Day 2: Variables - The Memory Boxes', icon: '📦' },
  { day: 3, label: 'Day 3: Making Decisions - If/Else', icon: '🤔' },
  { day: 4, label: 'Day 4: Loops - Over and Over', icon: '🔁' },
  { day: 5, label: 'Day 5: Functions - Your Own Commands', icon: '⚙️' },
  { day: 6, label: 'Day 6: Lists - Collections of Things', icon: '📋' },
  { day: 7, label: 'Day 7: Classes & Objects', icon: '🏗️' },
  { day: 8, label: 'Day 8: Polymorphism & Inheritance', icon: '🧬' },
  { day: 9, label: 'Day 9: Final Project - The Adventure RPG', icon: '🏆' }
];

const PROGRESS_BADGE = {
  completed: '✅',
  'in-progress': '✏️',
  'not-started': ''
};

function DaySelector() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [profile, setProfile] = useState(
    () => localStorage.getItem('active_profile') || DEFAULT_PROFILE
  );

  useEffect(() => {
    localStorage.setItem('active_profile', profile);
  }, [profile]);

  // Parent monitoring: bank active time per day, and mark each session start.
  usePageTimer(profile, selectedDay);
  // Cross-device progress: merged into the day badges below so switching
  // browsers doesn't make finished work look untouched.
  const serverProgress = useServerProgress(profile);
  useEffect(() => {
    track('session_start', { profile, day: selectedDay });
    // Deliberately keyed on profile only: one marker per kid per load/switch,
    // not one per day tab click (usePageTimer already covers day movement).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  const renderDay = () => {
    // key={profile} forces a fresh mount on profile switch, so each DayNApp
    // reloads that profile's saved answers cleanly.
    switch (selectedDay) {
      case 1:
        return <App key={profile} profile={profile} />;
      case 2:
        return <Day2App key={profile} profile={profile} />;
      case 3:
        return <Day3App key={profile} profile={profile} />;
      case 4:
        return <Day4App key={profile} profile={profile} />;
      case 5:
        return <Day5App key={profile} profile={profile} />;
      case 6:
        return <Day6App key={profile} profile={profile} />;
      case 7:
        return <Day7App key={profile} profile={profile} />;
      case 8:
        return <Day8App key={profile} profile={profile} />;
      case 9:
        return <Day9App key={profile} profile={profile} />;
      default:
        return <App key={profile} profile={profile} />;
    }
  };

  return (
    <div className="day-selector-container">
      <div className="day-selector-header">
        <h1>🎓 Python Adventures for Kids</h1>

        <div className="profile-switcher">
          <span className="profile-switcher-label">Who's learning?</span>
          {PROFILES.map((p) => (
            <button
              key={p.id}
              className={`profile-button ${profile === p.id ? 'active' : ''}`}
              onClick={() => setProfile(p.id)}
            >
              <span className="profile-icon">{p.icon}</span>
              {p.label}
            </button>
          ))}
        </div>

        <div className="day-buttons">
          {DAYS.map((d) => {
            const progress = getMergedDayProgress(profile, d.day, serverProgress[d.day]);
            return (
              <button
                key={d.day}
                className={`day-button ${selectedDay === d.day ? 'active' : ''}`}
                onClick={() => setSelectedDay(d.day)}
              >
                <span className="day-button-icon">{d.icon}</span>
                <span className="day-button-label">{d.label}</span>
                {PROGRESS_BADGE[progress] && (
                  <span className="day-progress-badge" title={progress}>
                    {PROGRESS_BADGE[progress]}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      {/* key={profile} matters: the panel sits outside the day content's own
          remount, so without it one kid's conversation would carry over into
          the other's session. */}
      <AiTeacher key={profile} profile={profile} day={selectedDay}>
        <div className="day-content">
          {renderDay()}
        </div>
      </AiTeacher>
    </div>
  );
}

export default DaySelector;
