import React, { useState, useEffect } from 'react';
import StaffService from './StaffService';

function StaffComponent() {
  const [staff, setStaff] = useState([]);
  
  useEffect(() => {
    StaffService.getAllStaff().then((response) => {
      setStaff(response.data);
    });
  }, []);
  
  return (
    <div>
      <h2>Staff List</h2>
      <ul>
        {staff.map(staffMember => (
          <li key={staffMember.id}>{staffMember.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StaffComponent;
