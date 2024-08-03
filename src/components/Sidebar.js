import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import ApartmentIcon from '@mui/icons-material/Apartment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssessmentIcon from '@mui/icons-material/Assessment';
import "./Sidebar.css"; // Import the CSS for Sidebar

function Sidebar() {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={true} // Ensure the drawer is always open for this example
      className="sidebar"
    >
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/manage-users">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Users" />
        </ListItem>
        <ListItem button component={Link} to="/manage-properties">
          <ListItemIcon>
            <ApartmentIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Properties" />
        </ListItem>
        <ListItem button component={Link} to="/rent-collection">
          <ListItemIcon>
            <MoneyOffIcon />
          </ListItemIcon>
          <ListItemText primary="Rent Collection" />
        </ListItem>
        <ListItem button component={Link} to="/maintenance-requests">
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Maintenance Requests" />
        </ListItem>
        <ListItem button component={Link} to="/alert-customer">
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Alert Customers" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
