import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import NewScheduleDetailsForm from '../components/NewScheduleDetailsForm';

const ScheduleDetails = () => {
  const [schedules, setScheduleren] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('first_name');
  const [open, setOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  useEffect(() => {
    fetchScheduleren();
  }, []);

  const fetchScheduleren = () => {
    axios.get('http://localhost:8080/schedule')
      .then(response => {
        setScheduleren(response.data);
        console.log('Scheduleren fetched:', response.data);
      })
      .catch(error => {
        console.error('Error fetching schedules:', error);
      });
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClickOpen = (schedule = null) => {
    setSelectedSchedule(schedule);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSchedule(null);
  };
const handleDelete = (id) => {
  axios.delete(`http://localhost:8080/schedule?scheduleId=${id}`)
    .then(() => {
      fetchScheduleren();
    })
    .catch(error => {
      console.error('Error deleting schedule:', error);
    });
};

  const handleSave = () => {
    fetchScheduleren();
    handleClose();
  };

  const filteredScheduleren = schedules.filter((schedule) =>
    schedule.first_name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Schedule Details
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleClickOpen()} sx={{ mb: 2 }}>
        Add New Schedule Details
      </Button>
      <TextField
        variant="outlined"
        placeholder="Search by first name"
        value={filterName}
        onChange={handleFilterByName}
        sx={{
          mb: 2,
          width: '100%',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'primary.main',
            },
            '&:hover fieldset': {
              borderColor: 'primary.dark',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.light',
            },
          },
          '& .MuiInputBase-input': {
            padding: '10px 14px',
          },
        }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'first_name'}
                  direction={orderBy === 'first_name' ? order : 'asc'}
                  onClick={() => handleRequestSort('first_name')}
                >
                  First Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'last_name'}
                  direction={orderBy === 'last_name' ? order : 'asc'}
                  onClick={() => handleRequestSort('last_name')}
                >
                  Last Name
                </TableSortLabel>
              </TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredScheduleren.map((schedule) => (
              <TableRow key={schedule.id} hover>
                <TableCell>{schedule.id}</TableCell>
                <TableCell>{schedule.date}</TableCell>
                <TableCell>{schedule.end_time}</TableCell>
                <TableCell>{schedule.staff_id}</TableCell>
                <TableCell>{schedule.child_id}</TableCell>
                <TableCell>{schedule.classroom_id}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleClickOpen(schedule)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(schedule.id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedSchedule ? 'Edit Schedule Details' : 'Add New Schedule Details'}</DialogTitle>
        <DialogContent>
          <NewScheduleDetailsForm schedule={selectedSchedule} onSave={handleSave} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ScheduleDetails;