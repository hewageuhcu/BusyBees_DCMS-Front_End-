import React, { useState, useEffect } from 'react';
import ScheduleService from './ScheduleService';

function ScheduleComponent() {
  const [schedules, setSchedules] = useState([]);
  
  useEffect(() => {
    ScheduleService.getAllSchedules().then((response) => {
      setSchedules(response.data);
    });
  }, []);
  
  return (
    <div>
      <h2>Schedule List</h2>
      <ul>
        {schedules.map(schedule => (
          <li key={schedule.id}>{schedule.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default ScheduleComponent;
