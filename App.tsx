import React from 'react';
import './App.css';

// Mock data
const healthIndicators = [
  { title: 'Healthy Heart', status: 'Good', color: 'green' },
  { title: 'Lungs', status: 'Warning', color: 'red' },
  { title: 'Teeth', status: 'Checkup', color: 'orange' },
  { title: 'Bone', status: 'Healthy', color: 'green' }
];

const healthCards = [
  { title: 'Lungs', status: 'Check Needed', date: '2025-05-24' },
  { title: 'Teeth', status: 'Healthy', date: '2025-05-22' },
  { title: 'Bone', status: 'Good', date: '2025-05-21' }
];

const upcomingSchedule = [
  { day: 'Thursday', items: [
    { title: 'Health checkup complete', time: '09:00' },
    { title: 'Ophthalmologist', time: '11:00' }
  ]},
  { day: 'Saturday', items: [
    { title: 'Cardiologist', time: '13:00' },
    { title: 'Neurologist', time: '15:00' }
  ]}
];

const calendarSlots = {
  '2025-10-05': ['09:00', '11:00'],
  '2025-10-10': ['13:00'],
  '2025-10-15': ['15:00']
};

// Components
const AnatomySection = () => (
  <div className="anatomy-section card">
    <h3>Anatomy Overview</h3>
    <img src="https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=300/https://media.easy-peasy.ai/289c1a80-2706-4bdf-bfb4-c02ac886dd9a/80a4932c-3d70-486e-a931-5290dc0b2986.png" alt="Human Body" />
    <ul>
      {healthIndicators.map((item, idx) => (
        <li key={idx} style={{ color: item.color }}>
          {item.title}: {item.status}
        </li>
      ))}
    </ul>
  </div>
);

const HealthStatusCards = () => (
  <div className="health-cards">
    {healthCards.map((card, idx) => (
      <div className="card" key={idx}>
        <h4>{card.title}</h4>
        <p>{card.status}</p>
        <small>{card.date}</small>
      </div>
    ))}
  </div>
);

const CalendarView = () => (
  <div className="card">
    <h3>October 2025</h3>
    <div className="calendar-grid">
      {[...Array(31)].map((_, i) => {
        const dateStr = `2025-10-${String(i + 1).padStart(2, '0')}`;
        return (
          <div className="calendar-cell" key={i}>
            <strong>{i + 1}</strong>
            <div className="calendar-times">
              {(calendarSlots[dateStr] || []).map((time, j) => (
                <div key={j} className="calendar-time">{time}</div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const SimpleAppointmentCard = ({ title, time }) => (
  <div className="appointment-card card">
    <p>{title}</p>
    <small>{time}</small>
  </div>
);

const UpcomingSchedule = () => (
  <div className="card">
    <h3>The Upcoming Schedule</h3>
    {upcomingSchedule.map((day, idx) => (
      <div key={idx}>
        <strong>On {day.day}</strong>
        {day.items.map((appt, i) => (
          <SimpleAppointmentCard key={i} {...appt} />
        ))}
      </div>
    ))}
  </div>
);

const ActivityFeed = () => (
  <div className="card">
    <h3>Activity</h3>
    <p>3 appointments this week</p>
    <div className="activity-chart">
      {[3, 6, 4, 5, 2, 7].map((val, idx) => (
        <div key={idx} className="bar" style={{ height: `${val * 10}px` }}></div>
      ))}
    </div>
  </div>
);

const DashboardMainContent = () => (
  <main className="dashboard-main-content">
    <section className="top-section">
      <AnatomySection />
      <HealthStatusCards />
    </section>
    <section className="bottom-section">
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </section>
  </main>
);

// App Root
function App() {
  return (
    <div className="App">
      <DashboardMainContent />
    </div>
  );
}

export default App;
