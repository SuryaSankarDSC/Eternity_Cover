import React from "react";
import ClaimTabs from "./ClaimTabs";
import Header from "../Home/Header.js";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
const Claims = () => {
  return (
    <div> 
      <Header/>
      <Navbar/>
     <ClaimTabs />
     <Footer/>
    </div>
  );
};

export default Claims;
