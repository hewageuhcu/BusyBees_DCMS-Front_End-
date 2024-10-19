import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

function NewStaffDetailsForm({ staff, onSave, onClose }) {
  const [formData, setFormData] = useState({
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    role: '',
  });

  useEffect(() => {
    if (staff) {
      setFormData({
        id: staff.id,
        email: staff.email || '',
        first_name: staff.first_name || '',
        last_name: staff.last_name || '',
        phone_number: staff.phone_number || '',
        role: staff.role || '',
      });
    }
  }, [staff]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
<<<<<<< HEAD
      [name]: name === 'guardian_id' ? parseInt(value, 10) : value,
=======
      [name]: value,
>>>>>>> e758a5e6db78a870791a40e25785c0e73d9d45ba
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    console.log('Submitting form data:', formData); // Log the form data
    axios.post('http://localhost:8080/child', formData)
      .then(response => {
        console.log('Baby details saved:', response.data);
        setFormData({
          address: '',
          dob: '',
          first_name: '',
          last_name: '',
          guardian_id: '',
        });
      })
      .catch(error => {
        console.error('Error saving baby details:', error);
=======
    const request = staff
      ? axios.put(`http://localhost:8080/staff?id=${formData.id}`, formData)
      : axios.post('http://localhost:8080/staff', formData);

    request
      .then(response => {
        console.log('Staff details saved:', response.data);
        setFormData({
          id: 0,
          email: '',
          first_name: '',
          last_name: '',
          phone_number: '',
          role: '',
        });
        onSave();
      })
      .catch(error => {
        console.error('Error saving staff details:', error);
>>>>>>> e758a5e6db78a870791a40e25785c0e73d9d45ba
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="First Name"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        label="Last Name"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      />
      <TextField
<<<<<<< HEAD
        label="Date of Birth"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        label="Guardian ID"
        name="guardian_id"
        value={formData.guardian_id}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        type="number"
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
=======
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Phone Number"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="role-label">Role</InputLabel>
        <Select
          labelId="role-label"
          name="role"
          value={formData.role}
          onChange={handleChange}
          label="Role"
        >
          <MenuItem value="Teacher">Teacher</MenuItem>
          <MenuItem value="Assistant">Assistant</MenuItem>
          <MenuItem value="Cook">Babysitter</MenuItem>
          <MenuItem value="Administrator">Administrator</MenuItem>
          <MenuItem value="Janitor">Janitor</MenuItem>
          
        </Select>
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
>>>>>>> e758a5e6db78a870791a40e25785c0e73d9d45ba
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
  );
}

<<<<<<< HEAD
export default NewBabyDetailsForm;
=======
export default NewStaffDetailsForm;
>>>>>>> e758a5e6db78a870791a40e25785c0e73d9d45ba
