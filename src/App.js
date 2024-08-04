import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ManageUsers from "./components/ManageUsers";
import ManageProperties from "./components/ManageProperties";
import RentCollection from "./components/RentCollectionPage";
import MaintenanceRequests from "./components/MaintenanceRequestPage";
import AlertCustomers from "./components/AlertCustomers";
import PropertyDetailsPage from "./components/PropertyDetailsPage";
import EditPropertyPage from "./components/EditPropertyPage";
import AddPropertyPage from "./components/AddPropertyPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <div className="main-content">
          <div className="content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/manage-users" element={<ManageUsers />} />
              <Route path="/manage-properties" element={<ManageProperties />} />
              <Route path="/rent-collection" element={<RentCollection />} />
              <Route
                path="/maintenance-requests"
                element={<MaintenanceRequests />}
              />
              <Route path="/alert-customer" element={<AlertCustomers />} />
              <Route
                path="/property-details/:id"
                element={<PropertyDetailsPage />}
              />
              <Route path="/edit-property/:id" element={<EditPropertyPage />} />
              <Route path="/add-property" element={<AddPropertyPage />} />
              <Route path="/alert-customer" element={<AlertCustomers />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
