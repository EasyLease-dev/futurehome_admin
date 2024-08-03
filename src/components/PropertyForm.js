import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const PropertyForm = ({ property, onSave }) => {
  const [form, setForm] = useState({
    landlord: property ? property.landlord : '',
    registrationDate: property ? property.registrationDate : '',
    location: property ? property.location : '',
    // Include other property details here
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, id: property ? property.id : Date.now() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Landlord Name" name="landlord" value={form.landlord} onChange={handleInputChange} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Registration Date" name="registrationDate" value={form.registrationDate} onChange={handleInputChange} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Location" name="location" value={form.location} onChange={handleInputChange} fullWidth />
        </Grid>
        {/* Add other fields as needed */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">{property ? 'Save' : 'Add'}</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PropertyForm;
