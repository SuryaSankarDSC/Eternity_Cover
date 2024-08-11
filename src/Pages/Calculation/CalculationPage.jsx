import React, { useState } from 'react';
import axios from 'axios';
import './CalculationPage.css';
import Navbar from '../Navbar/Navbar'

const CalculationPage = () => {
  const [calculationData, setCalculationData] = useState({
    type: 'life',  // Default type
    year: '',
    age: '',
    income: '',
    houseValue: '',
    houseAge: '',
    location: '',
    carValue: '',
    carModel: '',
    carAge: '',
    bikeValue: '',
    bikeCc: '',
    bikeAge: '',
  });

  const [insuranceCover, setInsuranceCover] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCalculationData({ ...calculationData, [name]: value });
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/calculations/calculate', calculationData);
      if (response.status === 200 || response.status === 201) {
        setInsuranceCover(response.data.insuranceCover);
        setError('');
      } else {
        setError(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error calculating insurance:', error);
      setError(
        error.response && error.response.data && error.response.data.message
          ? `Error calculating insurance: ${error.response.data.message}`
          : 'Error calculating insurance: Network or server issue.'
      );
    }
  };

  return (
    <div className="calculation-page-container">
      <Navbar/>
      <br></br>
      <br/>
      <h1>Insurance Calculator</h1>
      <form onSubmit={handleCalculate}>
        <label>
          Type of Insurance:
          <select name="type" value={calculationData.type} onChange={handleChange}>
            <option value="life">Life Insurance</option>
            <option value="house">House Insurance</option>
            <option value="car">Car Insurance</option>
            <option value="bike">Bike Insurance</option>
          </select>
        </label>

        {calculationData.type === 'life' && (
          <>
            <label>
              Year:
              <input
                type="number"
                name="year"
                value={calculationData.year}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={calculationData.age}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Income:
              <input
                type="number"
                name="income"
                value={calculationData.income}
                onChange={handleChange}
                required
              />
            </label>
          </>
        )}

        {calculationData.type === 'house' && (
          <>
            <label>
              House Value:
              <input
                type="number"
                name="houseValue"
                value={calculationData.houseValue}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              House Age:
              <input
                type="number"
                name="houseAge"
                value={calculationData.houseAge}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={calculationData.location}
                onChange={handleChange}
                required
              />
            </label>
          </>
        )}

        {calculationData.type === 'car' && (
          <>
            <label>
              Car Value:
              <input
                type="number"
                name="carValue"
                value={calculationData.carValue}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Car Model:
              <input
                type="text"
                name="carModel"
                value={calculationData.carModel}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Car Age:
              <input
                type="number"
                name="carAge"
                value={calculationData.carAge}
                onChange={handleChange}
                required
              />
            </label>
          </>
        )}

        {calculationData.type === 'bike' && (
          <>
            <label>
              Bike Value:
              <input
                type="number"
                name="bikeValue"
                value={calculationData.bikeValue}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Bike CC:
              <input
                type="number"
                name="bikeCc"
                value={calculationData.bikeCc}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Bike Age:
              <input
                type="number"
                name="bikeAge"
                value={calculationData.bikeAge}
                onChange={handleChange}
                required
              />
            </label>
          </>
        )}

        <button type="submit">Calculate Insurance</button>
      </form>

      {insuranceCover !== null && (
        <div className="result">
          <h2>Estimated Insurance Cover: ₹{insuranceCover}</h2>
        </div>
      )}

      {error && (
        <div className="error">
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
};

export default CalculationPage;
