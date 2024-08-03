import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import './ManageUser.css'; // Ensure the CSS file is imported

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', role: 'Inspector', date: '2024-07-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', role: 'Landlord', date: '2024-07-15' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '', role: 'Tenant', date: '' });
  const [filters, setFilters] = useState({ name: '', date: '', role: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleAddUser = () => {
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { ...newUser, id }]);
    setNewUser({ name: '', email: '', phone: '', role: 'Tenant', date: '' });
  };

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    user.date.includes(filters.date) &&
    (filters.role ? user.role === filters.role : true)
  );

  return (
    <div className="manage-users">
      <h2>Manage Users</h2>
      <div className="filters">
        <TextField
          label="Filter by Name"
          name="name"
          value={filters.name}
          onChange={handleFilterChange}
          margin="normal"
        />
        <TextField
          label="Filter by Date"
          name="date"
          type="date"
          value={filters.date}
          onChange={handleFilterChange}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <FormControl margin="normal">
          <InputLabel>Filter by Role</InputLabel>
          <Select
            name="role"
            value={filters.role}
            onChange={handleFilterChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Tenant">Tenant</MenuItem>
            <MenuItem value="Landlord">Landlord</MenuItem>
            <MenuItem value="Inspector">Inspector</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.date}</TableCell>
              <TableCell>
                <Button variant="contained" color="secondary" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h3>Add New User</h3>
      <form noValidate autoComplete="off">
        <TextField
          label="Name"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Phone"
          name="phone"
          value={newUser.phone}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Role</InputLabel>
          <Select
            name="role"
            value={newUser.role}
            onChange={handleInputChange}
          >
            <MenuItem value="Tenant">Tenant</MenuItem>
            <MenuItem value="Landlord">Landlord</MenuItem>
            <MenuItem value="Inspector">Inspector</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Date"
          name="date"
          type="date"
          value={newUser.date}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" color="primary" onClick={handleAddUser}>Add User</Button>
      </form>
    </div>
  );
};

export default ManageUsers;
