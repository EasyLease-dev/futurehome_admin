import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import './TenantDetails.css';

const TenantDetails = ({ tenants, setTenants }) => {
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [tenantForm, setTenantForm] = useState({
    name: '',
    phone: '',
    email: '',
    occupation: '',
    aadharCard: null
  });

  const handleOpenDialog = (tenant = null) => {
    setIsEdit(!!tenant);
    setSelectedTenant(tenant);
    setTenantForm(tenant ? { ...tenant } : {
      name: '',
      phone: '',
      email: '',
      occupation: '',
      aadharCard: null
    });
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTenantForm({ ...tenantForm, [name]: value });
  };

  const handleFileChange = (e) => {
    setTenantForm({ ...tenantForm, aadharCard: e.target.files[0] });
  };

  const handleSaveTenant = () => {
    if (isEdit) {
      setTenants(tenants.map(tenant => tenant === selectedTenant ? tenantForm : tenant));
    } else {
      setTenants([...tenants, tenantForm]);
    }
    handleCloseDialog();
  };

  const handleDeleteTenant = (tenant) => {
    if (window.confirm('Are you sure you want to delete this tenant?')) {
      setTenants(tenants.filter(t => t !== tenant));
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => handleOpenDialog()} startIcon={<Add />}>Add Tenant</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Occupation</TableCell>
            <TableCell>Aadhar Card</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tenants.map((tenant, index) => (
            <TableRow key={index}>
              <TableCell>{tenant.name}</TableCell>
              <TableCell>{tenant.phone}</TableCell>
              <TableCell>{tenant.email}</TableCell>
              <TableCell>{tenant.occupation}</TableCell>
              <TableCell>{tenant.aadharCard ? tenant.aadharCard.name : 'N/A'}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleOpenDialog(tenant)}><Edit /></IconButton>
                <IconButton onClick={() => handleDeleteTenant(tenant)}><Delete /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{isEdit ? 'Edit Tenant' : 'Add Tenant'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={tenantForm.name}
            onChange={handleInputChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Phone"
            name="phone"
            value={tenantForm.phone}
            onChange={handleInputChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={tenantForm.email}
            onChange={handleInputChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Occupation"
            name="occupation"
            value={tenantForm.occupation}
            onChange={handleInputChange}
            margin="normal"
            fullWidth
          />
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="aadhar-card-upload"
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="aadhar-card-upload">
            <Button variant="contained" color="primary" component="span" style={{ marginTop: 16 }}>
              Upload Aadhar Card
            </Button>
          </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
          <Button onClick={handleSaveTenant} color="primary">{isEdit ? 'Save' : 'Add'}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TenantDetails;
