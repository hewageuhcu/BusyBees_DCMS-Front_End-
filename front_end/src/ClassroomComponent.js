import React, { useState, useEffect } from 'react';
import ClassroomService from './ClassroomService';

function ClassroomComponent() {
  const [classrooms, setClassrooms] = useState([]);
  
  useEffect(() => {
    ClassroomService.getAllClassrooms().then((response) => {
      setClassrooms(response.data);
    });
  }, []);
  
  return (
    <div>
      <h2>Classroom List</h2>
      <ul>
        {classrooms.map(classroom => (
          <li key={classroom.id}>{classroom.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClassroomComponent;
