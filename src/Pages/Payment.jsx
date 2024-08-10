import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./Payment.css"; // Import the CSS file

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the payment logic here
    alert("Payment successful!");
  };

  return (
    <div className="payment-container mx-auto py-10">
      <Navbar />
      <h2 className="payment-title text-center">
        Payment Gateway
      </h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="payment-field">
          <label className="payment-label" htmlFor="paymentMethod">
            Select Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            className="payment-input"
            value={paymentMethod}
            onChange={handlePaymentChange}
          >
            <option value="card">Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {paymentMethod === "card" && (
          <>
            <div className="payment-field">
              <label className="payment-label" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="payment-input"
                required
              />
            </div>
            <div className="payment-field">
              <label className="payment-label" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                className="payment-input"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="payment-field">
              <label className="payment-label" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="payment-input"
                required
              />
            </div>
          </>
        )}

        {paymentMethod === "upi" && (
          <div className="payment-field">
            <label className="payment-label" htmlFor="upiId">
              UPI ID
            </label>
            <input
              type="text"
              id="upiId"
              name="upiId"
              className="payment-input"
              required
            />
          </div>
        )}

        <div className="payment-button-container">
          <button
            type="submit"
            className="payment-button"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
