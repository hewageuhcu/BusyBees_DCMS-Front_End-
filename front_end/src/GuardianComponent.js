import React, { useState, useEffect } from 'react';
import GuardianService from './GuardianService';

function GuardianComponent() {
  const [guardians, setGuardians] = useState([]);
  
  useEffect(() => {
    GuardianService.getAllGuardians().then((response) => {
      setGuardians(response.data);
    });
  }, []);
  
  return (
    <div>
      <h2>Guardian List</h2>
      <ul>
        {guardians.map(guardian => (
          <li key={guardian.id}>{guardian.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GuardianComponent;
