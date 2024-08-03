import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Snackbar } from '@mui/material';
import axios from 'axios';

const AlertCustomerPage = () => {
  const [customer, setCustomer] = useState({
    name: '',
    role: '',
    phoneNumber: '',
    email: '',
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/notify-customer', customer);
      setSnackbarMessage('Notification sent successfully!');
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage('Failed to send notification.');
      setSnackbarOpen(true);
      console.error('Error sending notification', error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box p={3} sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Alert Customer
      </Typography>
      <form>
        <TextField
          label="Name"
          name="name"
          value={customer.name}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Role"
          name="role"
          value={customer.role}
          onChange={handleInputChange}
          fullWidth
          select
          sx={{ mb: 2 }}
        >
          <MenuItem value="tenant">Tenant</MenuItem>
          <MenuItem value="landlord">Landlord</MenuItem>
          <MenuItem value="inspector">Inspector</MenuItem>
        </TextField>
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={customer.phoneNumber}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          value={customer.email}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </Box>
  );
};

export default AlertCustomerPage;
