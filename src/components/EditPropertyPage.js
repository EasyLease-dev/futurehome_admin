import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

const EditPropertyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState({
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

  useEffect(() => {
    // Fetch property details by ID and set state
    // This is mocked for demonstration
    const fetchedProperty = {
      landlord: 'John Doe',
      registrationDate: '2023-07-20',
      location: 'New York',
      amenities: 'Bed, Table, Chair, Fridge, Washing Machine, Other',
      propertyDetails: {
        floors: 2,
        buildArea: '1200 sqft',
        totalRooms: 'Balcony: 1, Bathroom: 2, Bedrooms: 3, Kitchen: 1, Dining: 1',
        maintenance: 'Paint, Fan, Light, Door, Bathroom, Other',
      },
      tenants: 'Alice Johnson: 123-456-7890, alice@example.com, Engineer',
      media: {
        photos: 'https://example.com/photo1.jpg, https://example.com/photo2.jpg',
        videos: 'https://example.com/video1.mp4, https://example.com/video2.mp4',
      },
    };
    setProperty(fetchedProperty);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSave = () => {
    // Handle save functionality (e.g., send updated property to server)
    console.log('Property saved', property);
    navigate('/manage-properties');
  };

  return (
    <Box p={3} sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Edit Property
      </Typography>
      <form>
        <TextField
          label="Landlord"
          name="landlord"
          value={property.landlord}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Registration Date"
          name="registrationDate"
          value={property.registrationDate}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Location"
          name="location"
          value={property.location}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Amenities"
          name="amenities"
          value={property.amenities}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Floors"
          name="propertyDetails.floors"
          type="number"
          value={property.propertyDetails.floors}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Build Area"
          name="propertyDetails.buildArea"
          value={property.propertyDetails.buildArea}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Total Rooms"
          name="propertyDetails.totalRooms"
          value={property.propertyDetails.totalRooms}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Maintenance"
          name="propertyDetails.maintenance"
          value={property.propertyDetails.maintenance}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Tenants"
          name="tenants"
          value={property.tenants}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Photos"
          name="media.photos"
          value={property.media.photos}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Videos"
          name="media.videos"
          value={property.media.videos}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Property
        </Button>
      </form>
    </Box>
  );
};

export default EditPropertyPage;
