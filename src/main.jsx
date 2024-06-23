import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeroSection from "./sections/HeroSection";
import ServiceOne from "./sections/ServiceOne";
import ServiceTwo from "./sections/ServiceTwo";
import ServiceThree from "./sections/ServiceThree";
import AboutUs from "./sections/AboutUs";
import ContactSection from "./sections/ContactSection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeroSection></HeroSection>
    <ServiceOne></ServiceOne>
    <ServiceTwo></ServiceTwo>
    <ServiceThree></ServiceThree>
    <AboutUs></AboutUs>
    <ContactSection />
  </React.StrictMode>
);
