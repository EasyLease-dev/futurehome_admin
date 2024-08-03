import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ManageProperties = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([
    {
      id: 1,
      landlord: 'John Doe',
      registrationDate: '2023-07-20',
      location: 'New York',
    },
    {
      id: 2,
      landlord: 'Jane Smith',
      registrationDate: '2023-06-15',
      location: 'San Francisco',
    },
  ]);
  const [open, setOpen] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  const handleDelete = (id) => {
    setSelectedPropertyId(id);
    setOpen(true);
  };

  const confirmDelete = () => {
    setProperties(properties.filter(property => property.id !== selectedPropertyId));
    setOpen(false);
  };

  return (
    <Box p={3} sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Manage Properties
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/add-property')}
        sx={{ mb: 3 }}
      >
        Add Property
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Landlord</TableCell>
              <TableCell>Registration Date</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.map((property) => (
              <TableRow key={property.id}>
                <TableCell>{property.landlord}</TableCell>
                <TableCell>{property.registrationDate}</TableCell>
                <TableCell>{property.location}</TableCell>
                <TableCell>
                  <IconButton
                    component={Link}
                    to={`/property-details/${property.id}`}
                    color="primary"
                  >
                    More Details
                  </IconButton>
                  <IconButton
                    component={Link}
                    to={`/edit-property/${property.id}`}
                    color="primary"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(property.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this property?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ManageProperties;
