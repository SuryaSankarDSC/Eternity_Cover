// AdminPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminPage.css';

const AdminPage = () => {
  const [callbackRequests, setCallbackRequests] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [calculations, setCalculations] = useState([]);
  const [activeSection, setActiveSection] = useState('callbackRequests');
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [newRegistrationData, setNewRegistrationData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const registrationResponse = await axios.get('http://localhost:8080/get');
        setRegistrations(registrationResponse.data);

        const callbackResponse = await axios.get('http://localhost:8080/callback-requests');
        setCallbackRequests(callbackResponse.data);

        const calculationsResponse = await axios.get('http://localhost:8080/api/calculations');
        setCalculations(calculationsResponse.data);
      } catch (error) {
        console.error('There was an error fetching data!', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8080/update/${id}`, newRegistrationData);

      if (response.status === 200) {
        const updatedRegistrations = registrations.map(reg => 
          reg.id === id ? { ...reg, ...newRegistrationData } : reg
        );
        setRegistrations(updatedRegistrations);
        setNewRegistrationData({});
        setSelectedRegistration(null);
      } else {
        console.error('Update failed:', response.statusText);
      }
    } catch (error) {
      console.error('There was an error updating the registration!', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/delete/${id}`);
      setRegistrations(registrations.filter(reg => reg.id !== id));
    } catch (error) {
      console.error('There was an error deleting the registration!', error);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'callbackRequests':
        return (
          <section className="admin-section">
            <h2>Callback Requests</h2>
            <ul>
              {callbackRequests.length > 0 ? (
                callbackRequests.map((request, index) => (
                  <li key={index}>Phone: {request.phoneNumber}</li>
                ))
              ) : (
                <li>No callback requests</li>
              )}
            </ul>
          </section>
        );
      case 'registrations':
        return (
          <section className="admin-section">
            <h2>Registrations</h2>
            <ul>
              {registrations.length > 0 ? (
                registrations.map((registration) => (
                  <li key={registration.id}>
                    Username: {registration.username}, Email: {registration.email}, Password: {registration.password}
                    <button onClick={() => { 
                      setSelectedRegistration(registration.id);
                      setNewRegistrationData({ 
                        username: registration.username, 
                        email: registration.email, 
                        password: registration.password 
                      }); 
                    }}>
                      Update
                    </button>
                    <button onClick={() => handleDelete(registration.id)}>Delete</button>
                  </li>
                ))
              ) : (
                <li>No registrations available</li>
              )}
            </ul>
            {selectedRegistration && (
              <div className="update-form">
                <h3>Update Registration</h3>
                <input
                  type="text"
                  placeholder="Username"
                  value={newRegistrationData.username || ''}
                  onChange={(e) => setNewRegistrationData({ ...newRegistrationData, username: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newRegistrationData.email || ''}
                  onChange={(e) => setNewRegistrationData({ ...newRegistrationData, email: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={newRegistrationData.password || ''}
                  onChange={(e) => setNewRegistrationData({ ...newRegistrationData, password: e.target.value })}
                />
                <button onClick={() => handleUpdate(selectedRegistration)}>Submit Update</button>
              </div>
            )}
          </section>
        );
      case 'calculations':
        return (
          <section className="admin-section">
            <h2>Calculations</h2>
            <ul>
              {calculations.length > 0 ? (
                calculations.map((calc, index) => (
                  <li key={index}>
                    Type: {calc.type}, Year: {calc.year}, Age: {calc.age}, Insurance Cover: ₹{calc.insuranceCover}
                    <button onClick={() => handleDelete(calc.id)}>Delete</button>
                  </li>
                ))
              ) : (
                <li>No calculations available</li>
              )}
            </ul>
          </section>
        );
      default:
        return <section className="admin-section"><h2>Select a section</h2></section>;
    }
  };

  return (
    <div className="admin-page-container">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </header>

      <div className="admin-content">
        <aside className="sidebar">
          <ul>
            <li
              className={activeSection === 'callbackRequests' ? 'active' : ''}
              onClick={() => setActiveSection('callbackRequests')}
            >
              Callback Requests
            </li>
            <li
              className={activeSection === 'registrations' ? 'active' : ''}
              onClick={() => setActiveSection('registrations')}
            >
              Registrations
            </li>
            <li
              className={activeSection === 'calculations' ? 'active' : ''}
              onClick={() => setActiveSection('calculations')}
            >
              Calculations
            </li>
          </ul>
        </aside>

        <main className="main-content">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
