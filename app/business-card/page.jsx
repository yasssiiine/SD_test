"use client";

import { FaPhone, FaEnvelope, FaGlobe, FaGithub, FaLinkedin } from "react-icons/fa";
import './Business-Card.css';

export default function QRLandingPage() {
  return (
    <div className="business-card-container">
      
      <div className="business-card">
        
        {/* Logo / Name */}
        <div className="business-header">
          <h1 className="business-name">SmartDex</h1>
          <p className="business-title">Sayakoul Diyae Eddine</p>
          <p className="business-subtitle">Founder & CEO</p>
          <p className="business-tagline">
            Building intelligent digital solutions
          </p>
        </div>

        {/* Buttons */}
        <div className="action-buttons">

          {/* Phone */}
          <a
            href="tel:+212707458386"
            className="action-btn"
          >
            <FaPhone />
            Call Me
          </a>

          {/* Email */}
          <a
            href="mailto:Sayakoul.diyae-eddine@smartdex.ma"
            className="action-btn"
          >
            <FaEnvelope />
            Send Email
          </a>

          {/* Website */}
          <a
            href="https://smartdex.ma"
            target="_blank"
            className="action-btn"
          >
            <FaGlobe />
            Visit Website
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/HID4N1"
            target="_blank"
            className="action-btn"
          >
            <FaGithub />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/diyae-eddine-sayakoul/"
            target="_blank"
            className="action-btn"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
