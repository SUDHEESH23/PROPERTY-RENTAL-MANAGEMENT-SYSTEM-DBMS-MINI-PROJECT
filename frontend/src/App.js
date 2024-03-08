import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import PropertiesList from './components/property/PropertiesList';
import CreateProperty from './components/property/CreateProperty';
import UpdateProperty from './components/property/UpdateProperty';
import TenantsList from './components/tenant/TenantsList';
import TenantDetails from './components/tenant/TenantDetails';
import MaintenanceRequests from './components/maintenancerequest/MaintenanceRequests';
import Leaseinformation from './components/LeaseInfo/Leaseinformation';
import Home from './components/Home';
import PropertyownerList from './components/Propertyowner/PropertyownerList';
import CreatePropertyowner from './components/Propertyowner/CreatePropertyowner';
import UpdatePropertyowner from './components/Propertyowner/UpdatePropertyowner';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Render the Navbar component */}
        
        {/* Wrap Route components in Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<PropertiesList />} />
          <Route path="/tenants" element={<TenantsList />} />
          <Route path="/tenants/:id" element={<TenantDetails />} />
          <Route path="/maintenance-requests" element={<MaintenanceRequests />} />
          <Route path="/PropertyownerList" element={<PropertyownerList />} />
          <Route path="/LeaseAgreement" element={<Leaseinformation />} />
          <Route path="/create-property" element={<CreateProperty />} />
          <Route path="/update-property/:id" element={<UpdateProperty />} />
          <Route path="/create-property-owner" element={<CreatePropertyowner />} />
          <Route path="/update-property-owner/:id" element={<UpdatePropertyowner />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
