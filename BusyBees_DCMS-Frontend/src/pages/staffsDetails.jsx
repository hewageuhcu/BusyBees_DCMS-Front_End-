import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import NewStaffDetailsForm from '../components/NewStaffDetailsForm';

const StaffDetails = () => {
  const [staffs, setStaffs] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('first_name');
  const [open, setOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  useEffect(() => {
    fetchStaffs();
  }, []);

  const fetchStaffs = () => {
    axios.get('http://localhost:8080/staff')
      .then(response => {
        setStaffs(response.data);
        console.log('Staffs fetched:', response.data);
      })
      .catch(error => {
        console.error('Error fetching staffs:', error);
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

  const handleClickOpen = (staff = null) => {
    setSelectedStaff(staff);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedStaff(null);
  };
const handleDelete = (id) => {
  axios.delete(`http://localhost:8080/staff?staffId=${id}`)
    .then(() => {
      fetchStaffs();
    })
    .catch(error => {
      console.error('Error deleting staff:', error);
    });
};

  const handleSave = () => {
    fetchStaffs();
    handleClose();
  };

  const filteredStaffs = staffs.filter((staff) =>
    staff.first_name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Staff Details
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleClickOpen()} sx={{ mb: 2 }}>
        Add New Staff Details
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
            {filteredStaffs.map((staff) => (
              <TableRow key={staff.id} hover>
                <TableCell>{staff.id}</TableCell>
                <TableCell>{staff.first_name}</TableCell>
                <TableCell>{staff.last_name}</TableCell>
                <TableCell>{staff.email}</TableCell>
                <TableCell>{staff.phone_number}</TableCell>
                <TableCell>{staff.role}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleClickOpen(staff)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(staff.id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedStaff ? 'Edit Staff Details' : 'Add New Staff Details'}</DialogTitle>
        <DialogContent>
          <NewStaffDetailsForm staff={selectedStaff} onSave={handleSave} />
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

export default StaffDetails;