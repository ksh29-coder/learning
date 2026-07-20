import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DaySelector from './DaySelector';
import ParentDashboard from './components/ParentDashboard';

// Tiny, dependency-free routing: the kids' app lives at /, the parent
// monitoring dashboard at /parent. No react-router - CRA's SPA rewrite serves
// index.html for every path, so we just branch on the pathname here. The
// dashboard is still gated by the PARENT_PIN on the backend; this only decides
// which component mounts, not who is allowed to see the data.
const isParentRoute = window.location.pathname.replace(/\/+$/, '').endsWith('/parent');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {isParentRoute ? <ParentDashboard /> : <DaySelector />}
  </React.StrictMode>
);
