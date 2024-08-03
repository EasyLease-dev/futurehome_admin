import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Grid, Button, Paper, Box, Divider, Link } from '@mui/material';
import TenantDetails from './TenantDetails';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    id,
    landlord: 'John Doe',
    registrationDate: '2023-07-20',
    location: 'New York',
    amenities: ['Bed', 'Table', 'Chair', 'Fridge', 'Washing Machine', 'Other'],
    propertyDetails: {
      floors: 2,
      buildArea: '1200 sqft',
      totalRooms: {
        balcony: 1,
        bathroom: 2,
        bedrooms: 3,
        kitchen: 1,
        dining: 1,
      },
      maintenance: ['Paint', 'Fan', 'Light', 'Door', 'Bathroom', 'Other'],
    },
    tenants: [
      { name: 'Alice Johnson', phone: '123-456-7890', email: 'alice@example.com', occupation: 'Engineer' },
      // Add more tenant details
    ],
    media: {
      photos: [
        'https://example.com/photo1.jpg',
        'https://example.com/photo2.jpg',
        // Add more photo URLs
      ],
      videos: [
        'https://example.com/video1.mp4',
        'https://example.com/video2.mp4',
        // Add more video URLs
      ],
    },
  });

  const handleBack = () => {
    navigate('/manage-properties');
  };

  const handleEdit = () => {
    navigate(`/edit-property/${property.id}`);
  };

  const handleDelete = () => {
    // Add delete functionality here
    console.log('Property deleted');
  };

  const handleAddTenant = () => {
    // Add functionality to add tenant here
    console.log('Add tenant');
  };

  const handleEditTenant = (tenantIndex) => {
    // Add functionality to edit tenant here
    console.log('Edit tenant', tenantIndex);
  };

  const handleDeleteTenant = (tenantIndex) => {
    // Add functionality to delete tenant here
    console.log('Delete tenant', tenantIndex);
  };

  return (
    <Box p={3} sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBack}
        sx={{ mb: 3 }}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleEdit}
        sx={{ mb: 3, ml: 2 }}
      >
        Edit Property
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={handleDelete}
        sx={{ mb: 3, ml: 2 }}
      >
        Delete Property
      </Button>
      <Paper elevation={6} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ borderBottom: '2px solid #3f51b5', pb: 2 }}>
          Property Details
        </Typography>
        <Box mb={2}>
          <Typography variant="h6" color="textSecondary">Landlord:</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{property.landlord}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h6" color="textSecondary">Registration Date:</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{property.registrationDate}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h6" color="textSecondary">Location:</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{property.location}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h6" color="textSecondary">Amenities:</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{property.amenities.join(', ')}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h6" color="textSecondary">Floors:</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{property.propertyDetails.floors}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h6" color="textSecondary">Build Area:</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{property.propertyDetails.buildArea}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h6" color="textSecondary">Total Rooms:</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Balcony: {property.propertyDetails.totalRooms.balcony}, 
            Bathroom: {property.propertyDetails.totalRooms.bathroom}, 
            Bedrooms: {property.propertyDetails.totalRooms.bedrooms}, 
            Kitchen: {property.propertyDetails.totalRooms.kitchen}, 
            Dining: {property.propertyDetails.totalRooms.dining}
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h6" color="textSecondary">Maintenance Required:</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{property.propertyDetails.maintenance.join(', ')}</Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box mb={3}>
          <Typography variant="h6" color="textSecondary">Photos:</Typography>
          <Grid container spacing={2}>
            {property.media.photos.map((photo, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  component="img"
                  src={photo}
                  alt={`Property Photo ${index + 1}`}
                  sx={{ width: '100%', borderRadius: 1, boxShadow: 2 }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mb={3}>
          <Typography variant="h6" color="textSecondary">Videos:</Typography>
          {property.media.videos.map((video, index) => (
            <Box key={index} mb={2}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <Link href={video} target="_blank" rel="noopener noreferrer">
                  Watch Video {index + 1}
                </Link>
              </Typography>
            </Box>
          ))}
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography variant="h6" color="textSecondary">Tenants</Typography>
          <TenantDetails 
            tenants={property.tenants} 
            onAddTenant={handleAddTenant} 
            onEditTenant={handleEditTenant} 
            onDeleteTenant={handleDeleteTenant} 
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default PropertyDetailsPage;
