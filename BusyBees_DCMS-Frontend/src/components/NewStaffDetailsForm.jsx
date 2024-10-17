import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
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
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = staff
      ? axios.put(`http://localhost:8080/staff?staffId=${staff.id}`, formData)
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
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="First Name"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Last Name"
        name="last_name"
        value={formData.last_name}
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
      <TextField
        label="Role"
        name="role"
        value={formData.role}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default NewStaffDetailsForm;