import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./CarInsurance.css";

const CarInsurance = () => {
  const [submittedClaims, setSubmittedClaims] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newClaim = {
      policyHolderName: formData.get("policyHolderName"),
      policyNumber: formData.get("policyNumber"),
      dateOfService: formData.get("dateOfService"),
      description: formData.get("description"),
      totalAmount: formData.get("totalAmount"),
      receiptImage: formData.get("receiptImage"),
    };

    setSubmittedClaims([...submittedClaims, newClaim]);
    console.log("Submitted Claims:", submittedClaims);

    e.target.reset();
  };

  return (
    <div>
    <div className="ci-container mx-auto py-10">
      <Navbar />
      <br>
      </br>
      <br></br>
      <div className="ci-frame">
        <h2 className="ci-title text-center">
          Popular Car Insurance Policies
        </h2>
        <div className="ci-grid">
          <div className="ci-policy-card">
            <h3 className="ci-policy-title">Comprehensive Cover</h3>
            <p className="ci-policy-desc">Complete protection for your car, covering damages, theft, and third-party liability.</p>
            <button className="ci-btn ci-btn-learn">Learn More</button>
            <Link to="/payment" className="ci-btn ci-btn-buy">Buy Now</Link>
          </div>
          <div className="ci-policy-card">
            <h3 className="ci-policy-title">Third-Party Liability</h3>
            <p className="ci-policy-desc">Coverage for damages to third-party property or individuals or any other major accidents.</p>
            <button className="ci-btn ci-btn-learn">Learn More</button>
            <Link to="/payment" className="ci-btn ci-btn-buy">Buy Now</Link>
          </div>
          <div className="ci-policy-card">
            <h3 className="ci-policy-title">Zero Depreciation Process</h3>
            <p className="ci-policy-desc">Get full claim without any deduction for depreciation on replaced parts we can pay all .</p>
            <button className="ci-btn ci-btn-learn">Learn More</button>
            <Link to="/payment" className="ci-btn ci-btn-buy">Buy Now</Link>
          </div>
        </div>
        <h2 className="ci-claim-title text-center">
          Submit a Car Insurance Claim
        </h2>
        <form className="ci-form" onSubmit={handleSubmit}>
          <div className="ci-form-group">
            <label className="ci-form-label" htmlFor="policyHolderName">
              Policy Holder Name
            </label>
            <input
              type="text"
              id="policyHolderName"
              name="policyHolderName"
              className="ci-form-input"
              required
            />
          </div>
          <div className="ci-form-group">
            <label className="ci-form-label" htmlFor="policyNumber">
              Policy Number
            </label>
            <input
              type="text"
              id="policyNumber"
              name="policyNumber"
              className="ci-form-input"
              required
            />
          </div>
          <div className="ci-form-group">
            <label className="ci-form-label" htmlFor="dateOfService">
              Date of Incident
            </label>
            <input
              type="date"
              id="dateOfService"
              name="dateOfService"
              className="ci-form-input"
              required
            />
          </div>
          <div className="ci-form-group">
            <label className="ci-form-label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              className="ci-form-textarea"
              required
            ></textarea>
          </div>
          <div className="ci-form-group">
            <label className="ci-form-label" htmlFor="totalAmount">
              Total Amount
            </label>
            <input
              type="number"
              id="totalAmount"
              name="totalAmount"
              className="ci-form-input"
              required
            />
          </div>
          <div className="ci-form-group">
            <label className="ci-form-label" htmlFor="receiptImage">
              Receipt Image
            </label>
            <input
              type="file"
              id="receiptImage"
              name="receiptImage"
              className="ci-form-input"
              required
            />
          </div>
          <div className="ci-form-group">
            <button
              type="submit"
              className="ci-btn ci-btn-submit"
            >
              Submit Claim
            </button>
          </div>
        </form>
      </div>
    </div>
      <Footer />
      </div>
  );
};

export default CarInsurance;
