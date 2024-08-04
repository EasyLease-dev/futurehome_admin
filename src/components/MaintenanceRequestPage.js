import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, List, ListItem, ListItemText, Divider, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const MaintenanceRequestPage = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [openApproveDialog, setOpenApproveDialog] = useState(false);
  const [openRejectDialog, setOpenRejectDialog] = useState(false);
  const [inspectorName, setInspectorName] = useState('');
  const [rejectReason, setRejectReason] = useState('');

  const maintenanceRequests = [
    {
      id: 1,
      tenantName: 'Alice Johnson',
      phone: '123-456-7890',
      email: 'alice@example.com',
      subject: 'Leaking Pipe',
      description: 'There is a leaking pipe in the kitchen.',
    },
    {
      id: 2,
      tenantName: 'Bob Smith',
      phone: '234-567-8901',
      email: 'bob@example.com',
      subject: 'Broken Window',
      description: 'The window in the living room is broken.',
    },
    // Add more requests as needed
  ];

  const handleApprove = (request) => {
    setSelectedRequest(request);
    setOpenApproveDialog(true);
  };

  const handleReject = (request) => {
    setSelectedRequest(request);
    setOpenRejectDialog(true);
  };

  const handleApproveSubmit = () => {
    // Handle approve submission logic here
    console.log('Approved:', selectedRequest, 'Inspector:', inspectorName);
    setOpenApproveDialog(false);
    setInspectorName('');
  };

  const handleRejectSubmit = () => {
    // Handle reject submission logic here
    console.log('Rejected:', selectedRequest, 'Reason:', rejectReason);
    setOpenRejectDialog(false);
    setRejectReason('');
  };

  return (
    <Box p={3} sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Maintenance Requests
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={6} sx={{ p: 3 }}>
            <List>
              {maintenanceRequests.map((request) => (
                <React.Fragment key={request.id}>
                  <ListItem>
                    <ListItemText
                      primary={request.subject}
                      secondary={
                        <>
                          Tenant: {request.tenantName} <br />
                          Phone: {request.phone} <br />
                          Email: {request.email} <br />
                          Description: {request.description}
                        </>
                      }
                    />
                    <Button variant="contained" color="primary" onClick={() => handleApprove(request)} sx={{ mr: 2 }}>
                      Approve
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleReject(request)}>
                      Reject
                    </Button>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={openApproveDialog} onClose={() => setOpenApproveDialog(false)}>
        <DialogTitle>Approve Maintenance Request</DialogTitle>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            {selectedRequest?.subject}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {selectedRequest?.description}
          </Typography>
          <TextField
            label="Inspector Name"
            value={inspectorName}
            onChange={(e) => setInspectorName(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenApproveDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleApproveSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openRejectDialog} onClose={() => setOpenRejectDialog(false)}>
        <DialogTitle>Reject Maintenance Request</DialogTitle>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            {selectedRequest?.subject}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {selectedRequest?.description}
          </Typography>
          <TextField
            label="Reason for Rejection"
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenRejectDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRejectSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MaintenanceRequestPage;
