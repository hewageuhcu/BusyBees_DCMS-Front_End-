import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import NewBabyDetailsForm from '../components/NewBabyDetailsForm';

const BabyDetails = () => {
  const [children, setChildren] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('first_name');
  const [open, setOpen] = useState(false);

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

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filteredChildren = children.filter((child) =>
    child.first_name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Baby Details
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClickOpen} sx={{ mb: 2 }}>
        Add New Baby Details
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
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredChildren.map((child) => (
              <TableRow key={child.id} hover>
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

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Baby Details</DialogTitle>
        <DialogContent>
          <NewBabyDetailsForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BabyDetails;