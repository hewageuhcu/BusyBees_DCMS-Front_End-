import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

function NewGuardianDetailsForm({ guardian, onSave, onClose }) {
  const [formData, setFormData] = useState({
    id: 0,
    address: '',
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
  });

  useEffect(() => {
    if (guardian) {
      setFormData({
        id: guardian.id,
        address: guardian.address,
        email: guardian.email || '',
        first_name: guardian.first_name || '',
        last_name: guardian.last_name || '',
        phone_number: guardian.phone_number || '',
      });
    }
  }, [guardian]);

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
    const request = guardian
      ? axios.put(`http://localhost:8080/guardian?id=${formData.id}`, formData)
      : axios.post('http://localhost:8080/guardian', formData);

    request
      .then(response => {
        console.log('Guardian details saved:', response.data);
        setFormData({
          id: 0,
          address: '',
          email: '',
          first_name: '',
          last_name: '',
          phone_number: '',
        });
        onSave();
      })
      .catch(error => {
        console.error('Error saving guardian details:', error);
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
>>>>>>> e758a5e6db78a870791a40e25785c0e73d9d45ba
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
<<<<<<< HEAD
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
export default NewGuardianDetailsForm;
>>>>>>> e758a5e6db78a870791a40e25785c0e73d9d45ba
