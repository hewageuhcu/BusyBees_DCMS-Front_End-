// src/pages/Dashboard.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Dashboard = () => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/children')
      .then(response => {
        setChildren(response.data);
        console.log('Children fetched:', response.data);
      })
      .catch(error => {
        console.error('Error fetching children:', error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {children.map(child => (
              <TableRow key={child.id}>
                <TableCell>{child.id}</TableCell>
                <TableCell>{child.first_name}</TableCell>
                <TableCell>{child.last_name}</TableCell>
                <TableCell>{child.dob}</TableCell>
                <TableCell>{child.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;