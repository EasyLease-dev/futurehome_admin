import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, List, ListItem, ListItemText, Divider, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';

const RentCollectionPage = () => {
  const [filter, setFilter] = useState('tenant');
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [selectedLandlord, setSelectedLandlord] = useState(null);

  const tenants = [
    { id: 1, name: 'Alice Johnson', phone: '123-456-7890', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', phone: '234-567-8901', email: 'bob@example.com' },
    // Add more tenants as needed
  ];

  const landlords = [
    { id: 1, name: 'John Doe', phone: '345-678-9012', email: 'john@example.com', propertyId: '101' },
    { id: 2, name: 'Jane Doe', phone: '456-789-0123', email: 'jane@example.com', propertyId: '102' },
    // Add more landlords as needed
  ];

  const tenantPayments = {
    1: [
      { month: 'January', rent: 1000, electricBill: 100, waterBill: 50, other: 20, paymentStatus: 'Paid', daysLeft: 0 },
      { month: 'February', rent: 1000, electricBill: 110, waterBill: 60, other: 30, paymentStatus: 'Pending', daysLeft: 9 },
    ],
    2: [
      { month: 'January', rent: 950, electricBill: 90, waterBill: 40, other: 15, paymentStatus: 'Paid', daysLeft: 0 },
      { month: 'February', rent: 950, electricBill: 100, waterBill: 50, other: 25, paymentStatus: 'Pending', daysLeft: 10 },
    ],
  };

  const landlordPayments = {
    1: [
      { month: 'January', rentReceived: 1000, deductions: 50, paymentStatus: 'Received' },
      { month: 'February', rentReceived: 0, deductions: 0, paymentStatus: 'Pending' },
    ],
    2: [
      { month: 'January', rentReceived: 950, deductions: 40, paymentStatus: 'Received' },
      { month: 'February', rentReceived: 0, deductions: 0, paymentStatus: 'Pending' },
    ],
  };

  const securityDeposit = {
    1: 3000,
    2: 2800,
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setSelectedTenant(null);
    setSelectedLandlord(null);
  };

  const handleTenantClick = (tenant) => {
    setSelectedTenant(tenant);
  };

  const handleLandlordClick = (landlord) => {
    setSelectedLandlord(landlord);
  };

  return (
    <Box p={3} sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Rent Collection
      </Typography>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          value={filter}
          label="Filter"
          onChange={handleFilterChange}
        >
          <MenuItem value="tenant">Tenant</MenuItem>
          <MenuItem value="landlord">Landlord</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {filter === 'tenant' && (
          <Grid item xs={12} md={6}>
            <Paper elevation={6} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Tenants
              </Typography>
              <List>
                {tenants.map((tenant) => (
                  <React.Fragment key={tenant.id}>
                    <ListItem>
                      <ListItemText
                        primary={tenant.name}
                        secondary={
                          <>
                            Phone: {tenant.phone} <br />
                            Email: {tenant.email}
                          </>
                        }
                      />
                      <Button variant="contained" onClick={() => handleTenantClick(tenant)}>
                        Collection Details
                      </Button>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
        )}
        {filter === 'landlord' && (
          <Grid item xs={12} md={6}>
            <Paper elevation={6} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Landlords
              </Typography>
              <List>
                {landlords.map((landlord) => (
                  <React.Fragment key={landlord.id}>
                    <ListItem>
                      <ListItemText
                        primary={landlord.name}
                        secondary={
                          <>
                            Phone: {landlord.phone} <br />
                            Email: {landlord.email} <br />
                            Property ID: {landlord.propertyId}
                          </>
                        }
                      />
                      <Button variant="contained" onClick={() => handleLandlordClick(landlord)}>
                        Rent Earned
                      </Button>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
        )}
      </Grid>

      {selectedTenant && (
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <Paper elevation={6} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                {selectedTenant.name}'s Payment Details
              </Typography>
              <List>
                {tenantPayments[selectedTenant.id].map((payment, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={`${payment.month}`}
                        secondary={
                          <>
                            Rent: ${payment.rent} <br />
                            Electric Bill: ${payment.electricBill} <br />
                            Water Bill: ${payment.waterBill} <br />
                            Other: ${payment.other} <br />
                            Status: {payment.paymentStatus} <br />
                            {payment.daysLeft > 0 ? `${payment.daysLeft} days left for payment` : 'Payment complete'}
                          </>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Security Deposit: ${securityDeposit[selectedTenant.id]}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      )}

      {selectedLandlord && (
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <Paper elevation={6} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                {selectedLandlord.name}'s Rent Details
              </Typography>
              <List>
                {landlordPayments[selectedLandlord.id].map((payment, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={`${payment.month}`}
                        secondary={
                          <>
                            Rent Received: ${payment.rentReceived} <br />
                            Deductions: ${payment.deductions} <br />
                            Status: {payment.paymentStatus}
                          </>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default RentCollectionPage;
