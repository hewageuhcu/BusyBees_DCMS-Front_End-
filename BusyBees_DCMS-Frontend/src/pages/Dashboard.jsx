// src/pages/Dashboard.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent, Avatar } from '@mui/material';
import { People, Group, School, Work, Schedule } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [children, setChildren] = useState([]);
  const [guardians, setGuardians] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/children').then(response => setChildren(response.data)).catch(error => console.error('Error fetching children:', error));
    axios.get('http://localhost:8080/guardian').then(response => setGuardians(response.data)).catch(error => console.error('Error fetching guardians:', error));
    axios.get('http://localhost:8080/classRoom').then(response => setClassrooms(response.data)).catch(error => console.error('Error fetching classrooms:', error));
    axios.get('http://localhost:8080/staff').then(response => setStaffs(response.data)).catch(error => console.error('Error fetching staff:', error));
    axios.get('http://localhost:8080/schedule').then(response => setSchedules(response.data)).catch(error => console.error('Error fetching schedules:', error));
  }, []);

  const childrenCount = children.length;
  const guardiansCount = guardians.length;
  const classroomsCount = classrooms.length;
  const staffsCount = staffs.length;
  const schedulesCount = schedules.length;

  const data = [
    { name: 'Children', count: childrenCount },
    { name: 'Guardians', count: guardiansCount },
    { name: 'Classrooms', count: classroomsCount },
    { name: 'Staff', count: staffsCount },
    { name: 'Schedules', count: schedulesCount },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)', borderRadius: 2 }}>
            <Avatar sx={{ bgcolor: '#3f51b5', mr: 2 }}>
              <People />
            </Avatar>
            <CardContent>
              <Typography variant="h6" color="textSecondary">Children</Typography>
              <Typography variant="h4">{childrenCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: 2 }}>
            <Avatar sx={{ bgcolor: '#f50057', mr: 2 }}>
              <Group />
            </Avatar>
            <CardContent>
              <Typography variant="h6" color="textSecondary">Guardians</Typography>
              <Typography variant="h4">{guardiansCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', borderRadius: 2 }}>
            <Avatar sx={{ bgcolor: '#ff9800', mr: 2 }}>
              <School />
            </Avatar>
            <CardContent>
              <Typography variant="h6" color="textSecondary">Classrooms</Typography>
              <Typography variant="h4">{classroomsCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: 2 }}>
            <Avatar sx={{ bgcolor: '#673ab7', mr: 2 }}>
              <Work />
            </Avatar>
            <CardContent>
              <Typography variant="h6" color="textSecondary">Staff</Typography>
              <Typography variant="h4">{staffsCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)', borderRadius: 2 }}>
            <Avatar sx={{ bgcolor: '#009688', mr: 2 }}>
              <Schedule />
            </Avatar>
            <CardContent>
              <Typography variant="h6" color="textSecondary">Schedules</Typography>
              <Typography variant="h4">{schedulesCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Data Overview
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
