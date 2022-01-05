import { Navbar, Welcome, Footer, Services, Transactions } from "../";
import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const About = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
        <Navbar />
        <Services/>
    </div>
    <Footer />
  </div>
);

export default About;