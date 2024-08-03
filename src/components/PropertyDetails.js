import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import TenantDetails from './TenantDetails';

const PropertyDetails = ({ property }) => {
  const [tenants, setTenants] = useState(property.tenants);

  return (
    <div>
      <Typography variant="h6">Property Location: {property.propertyDetails.location}</Typography>
      <Typography variant="h6">Build Area: {property.propertyDetails.buildArea}</Typography>
      <Typography variant="h6">Total Rooms: {JSON.stringify(property.propertyDetails.totalRooms)}</Typography>
      <Typography variant="h6">Amenities: {JSON.stringify(property.amenities)}</Typography>
      <Typography variant="h6">Maintenance Required: {JSON.stringify(property.propertyDetails.maintenance)}</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Tenants</Typography>
          <TenantDetails tenants={tenants} setTenants={setTenants} />
        </Grid>
      </Grid>
    </div>
  );
};

export default PropertyDetails;
