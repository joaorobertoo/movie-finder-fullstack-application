import React from "react";
import "./Footer.scss";
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div>© 2024 Movie finder App by João Roberto M. Gubolin</div>
    <div>
      <a href="https://www.linkedin.com/in/joao-roberto-m-gubolin/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={30} /></a>
    </div>
  </footer>
);

export default Footer;
