import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, MenuItem } from '@mui/material';

const AddPropertyPage = () => {
  const navigate = useNavigate();
  const [newProperty, setNewProperty] = useState({
    landlord: '',
    registrationDate: '',
    location: '',
    amenities: '',
    propertyDetails: {
      floors: 0,
      buildArea: '',
      totalRooms: {
        balcony: 0,
        bathroom: 0,
        bedrooms: 0,
        kitchen: 0,
        dining: 0,
      },
      maintenance: '',
    },
    tenants: '',
    media: {
      photos: '',
      videos: '',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty({ ...newProperty, [name]: value });
  };

  const handleAdd = () => {
    // Handle add functionality (e.g., send newProperty to server)
    console.log('Property added', newProperty);
    navigate('/manage-properties');
  };

  return (
    <Box p={3} sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Add Property
      </Typography>
      <form>
        <TextField
          label="Landlord"
          name="landlord"
          value={newProperty.landlord}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Registration Date"
          name="registrationDate"
          value={newProperty.registrationDate}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Location"
          name="location"
          value={newProperty.location}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Amenities"
          name="amenities"
          value={newProperty.amenities}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Floors"
          name="propertyDetails.floors"
          type="number"
          value={newProperty.propertyDetails.floors}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Build Area"
          name="propertyDetails.buildArea"
          value={newProperty.propertyDetails.buildArea}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Total Rooms"
          name="propertyDetails.totalRooms"
          value={newProperty.propertyDetails.totalRooms}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Maintenance"
          name="propertyDetails.maintenance"
          value={newProperty.propertyDetails.maintenance}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Tenants"
          name="tenants"
          value={newProperty.tenants}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Photos"
          name="media.photos"
          value={newProperty.media.photos}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Videos"
          name="media.videos"
          value={newProperty.media.videos}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add Property
        </Button>
      </form>
    </Box>
  );
};

export default AddPropertyPage;
