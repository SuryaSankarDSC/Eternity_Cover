import React, { useState } from "react";

const ClaimHelpdesk = () => {
  const [state, setState] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [helplineNumber, setHelplineNumber] = useState("");

  const handleStateChange = (selectedState) => {
    setState(selectedState);
    updateHelplineNumber(selectedState, insuranceType);
  };

  const handleInsuranceTypeChange = (selectedInsuranceType) => {
    setInsuranceType(selectedInsuranceType);
    updateHelplineNumber(state, selectedInsuranceType);
  };

  const updateHelplineNumber = (selectedState, selectedInsuranceType) => {
    // Replace fictional helpline numbers with actual numbers for each state and insurance type
    const helplineNumbers = {
      car: {
        "Andhra Pradesh": "1-800-111-1111",
        "Arunachal Pradesh": "1-800-222-2222",
        Assam: "1-800-333-3333",
        Bihar: "1-800-444-4444",
        Chhattisgarh: "1-800-555-5555",
        Goa: "1-800-666-6666",
        Gujarat: "1-800-777-7777",
        Haryana: "1-800-888-8888",
        "Himachal Pradesh": "1-800-999-9999",
        Jharkhand: "1-800-123-4567",
        Karnataka: "1-800-987-6543",
        Kerala: "1-800-543-2109",
        "Madhya Pradesh": "1-800-987-6543",
        Maharashtra: "1-800-543-2109",
        Manipur: "1-800-987-6543",
        Meghalaya: "1-800-543-2109",
        Mizoram: "1-800-987-6543",
        Nagaland: "1-800-543-2109",
        Odisha: "1-800-987-6543",
        Punjab: "1-800-543-2109",
        Rajasthan: "1-800-987-6543",
        Sikkim: "1-800-543-2109",
        "Tamil Nadu": "1-800-987-6543",
        Telangana: "1-800-543-2109",
        Tripura: "1-800-987-6543",
        "Uttar Pradesh": "1-800-543-2109",
        Uttarakhand: "1-800-987-6543",
        "West Bengal": "1-800-543-2109",
      },
      life: {
        "Andhra Pradesh": "1-800-211-2111",
        "Arunachal Pradesh": "1-800-222-2222",
        Assam: "1-800-233-3333",
        Bihar: "1-800-244-4444",
        Chhattisgarh: "1-800-255-5555",
        Goa: "1-800-266-6666",
        Gujarat: "1-800-277-7777",
        Haryana: "1-800-288-8888",
        "Himachal Pradesh": "1-800-299-9999",
        Jharkhand: "1-800-223-4567",
        Karnataka: "1-800-287-6543",
        Kerala: "1-800-247-2109",
        "Madhya Pradesh": "1-800-287-6543",
        Maharashtra: "1-800-247-2109",
        Manipur: "1-800-287-6543",
        Meghalaya: "1-800-247-2109",
        Mizoram: "1-800-287-6543",
        Nagaland: "1-800-247-2109",
        Odisha: "1-800-287-6543",
        Punjab: "1-800-247-2109",
        Rajasthan: "1-800-287-6543",
        Sikkim: "1-800-247-2109",
        "Tamil Nadu": "1-800-287-6543",
        Telangana: "1-800-247-2109",
        Tripura: "1-800-287-6543",
        "Uttar Pradesh": "1-800-247-2109",
        Uttarakhand: "1-800-287-6543",
        "West Bengal": "1-800-247-2109",
      },
      house: {
        "Andhra Pradesh": "1-800-311-1111",
        "Arunachal Pradesh": "1-800-322-2222",
        Assam: "1-800-333-3333",
        Bihar: "1-800-344-4444",
        Chhattisgarh: "1-800-355-5555",
        Goa: "1-800-366-6666",
        Gujarat: "1-800-377-7777",
        Haryana: "1-800-388-8888",
        "Himachal Pradesh": "1-800-399-9999",
        Jharkhand: "1-800-323-4567",
        Karnataka: "1-800-387-6543",
        Kerala: "1-800-347-2109",
        "Madhya Pradesh": "1-800-387-6543",
        Maharashtra: "1-800-347-2109",
        Manipur: "1-800-387-6543",
        Meghalaya: "1-800-347-2109",
        Mizoram: "1-800-387-6543",
        Nagaland: "1-800-347-2109",
        Odisha: "1-800-387-6543",
        Punjab: "1-800-347-2109",
        Rajasthan: "1-800-387-6543",
        Sikkim: "1-800-347-2109",
        "Tamil Nadu": "1-800-387-6543",
        Telangana: "1-800-347-2109",
        Tripura: "1-800-387-6543",
        "Uttar Pradesh": "1-800-347-2109",
        Uttarakhand: "1-800-387-6543",
        "West Bengal": "1-800-347-2109",
      },
    };

    setHelplineNumber(helplineNumbers[selectedInsuranceType]?.[selectedState] || "");
  };

  // List of all states of India
  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    // Add all states of India
  ];

  // List of insurance types
  const insuranceTypes = ["car", "life", "house"];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Insurance Claim Helpdesk
      </h2>
      <div className="mb-4">
        <label className="block font-medium" htmlFor="state">
          Select State:
        </label>
        <select
          id="state"
          name="state"
          className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
          value={state}
          onChange={(e) => handleStateChange(e.target.value)}
          required
        >
          <option value="">Select State</option>
          {statesOfIndia.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium" htmlFor="insuranceType">
          Select Insurance Type:
        </label>
        <select
          id="insuranceType"
          name="insuranceType"
          className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
          value={insuranceType}
          onChange={(e) => handleInsuranceTypeChange(e.target.value)}
          required
        >
          <option value="">Select Insurance Type</option>
          {insuranceTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      {helplineNumber && (
        <div className="mb-4">
          <p className="font-medium">Helpline Number for {state} ({insuranceType} insurance):</p>
          <p>{helplineNumber}</p>
        </div>
      )}
      <div>
        <p className="font-medium">Other Relevant Information:</p>
        <p>
          If you have any queries or need assistance with your insurance claim, our helpdesk is available to support you. Please reach out to the helpline number for your respective state.
        </p>
        <p>
          Our experienced representatives will guide you through the claim process, provide you with the necessary information, and address any concerns you may have regarding your insurance claim.
        </p>
        <p>
          For urgent matters or emergencies, kindly dial our 24/7 helpline number for immediate assistance and support.
        </p>
        <p>
          Thank you for choosing us as your insurance provider. We are committed to ensuring a seamless and hassle-free claim experience for you.
        </p>
      </div>
    </div>
  );
};

export default ClaimHelpdesk;
