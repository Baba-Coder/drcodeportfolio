import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import {FaLinkedin} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
     <a href="" className='footer__logo'>dr Code</a>

     <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
     </ul>

     <div className='footer__socials'>
        <a href="https://facebook.com//thundae.holarniyi"><FaFacebookF/></a>
        <a href="https://instagram.com/ibaba_holla/"><FiInstagram /></a>
        <a href="https://twitter.com/itech_Baba"><IoLogoTwitter /></a>
        <a href="https://linkedin.com/babatunde-olaniyi-530036139/"><FaLinkedin /></a>
     </div>
     
     <div className="footer__copyright">
      <small>&copy; drCode. All rights reserved</small>
     </div>
    </footer>
  );
}

export default Footer;
