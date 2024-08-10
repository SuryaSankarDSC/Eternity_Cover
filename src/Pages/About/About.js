import React from 'react'
import Map from './Map'
import Steps from './Steps'
import EternityCover from './EternityCover'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Steps />
      <EternityCover />
      <Map/>
      <Footer></Footer>
    </div>
  )
}

export default About