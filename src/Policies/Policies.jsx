import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Policies.css';
import Navbar from '../Pages/Navbar/Navbar';

const Policies = () => {
  const [policies, setPolicies] = useState([]);
  const [newPolicy, setNewPolicy] = useState({
    type: 'car',
    description: '',
    coverageAmount: '',
    premiumAmount: ''
  });

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/policies');
      setPolicies(response.data);
    } catch (error) {
      console.error('Error fetching policies:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPolicy({ ...newPolicy, [name]: value });
  };

  const handleAddPolicy = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/policies', newPolicy);
      fetchPolicies(); // Refresh the list
      setNewPolicy({
        type: 'car',
        description: '',
        coverageAmount: '',
        premiumAmount: ''
      });
    } catch (error) {
      console.error('Error adding policy:', error);
    }
  };

  return (
    <div className="policies-container">
      <Navbar />
      <h1 className="policies-title">Insurance Policies</h1>

      <form className="policies-form" onSubmit={handleAddPolicy}>
        <label className="form-label">
          Type of Policy:
          <select name="type" className="form-select" value={newPolicy.type} onChange={handleChange}>
            <option value="car">Car Insurance</option>
            <option value="bike">Bike Insurance</option>
            <option value="health">Health Insurance</option>
            <option value="life">Life Insurance</option>
            <option value="travel">Travel Insurance</option>
            <option value="home">Home Insurance</option>
          </select>
        </label>
        <label className="form-label">
          Description:
          <input
            type="text"
            name="description"
            className="form-input"
            value={newPolicy.description}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-label">
          Coverage Amount:
          <input
            type="number"
            name="coverageAmount"
            className="form-input"
            value={newPolicy.coverageAmount}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-label">
          Premium Amount:
          <input
            type="number"
            name="premiumAmount"
            className="form-input"
            value={newPolicy.premiumAmount}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="form-button">Add Policy</button>
      </form>

      <div className="policies-list">
        {policies.map((policy) => (
          <div key={policy.id} className="policy-item">
            <h2 className="policy-type">{policy.type} Insurance</h2>
            <p className="policy-description">{policy.description}</p>
            <p className="policy-coverage">Coverage Amount: ₹{policy.coverageAmount}</p>
            <p className="policy-premium">Premium Amount: ₹{policy.premiumAmount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policies;
