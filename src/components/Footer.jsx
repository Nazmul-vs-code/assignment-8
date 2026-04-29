import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">

      <nav>
        <h6 className="footer-title">Animals</h6>
        <a className="link link-hover">Cows</a>
        <a className="link link-hover">Goats</a>
        <a className="link link-hover">Buffalo</a>
        <a className="link link-hover">Premium Qurbani</a>
      </nav>

      <nav>
        <h6 className="footer-title">Shop</h6>
        <a className="link link-hover">All Animals</a>
        <a className="link link-hover">Booking</a>
        <a className="link link-hover">Pricing Info</a>
        <a className="link link-hover">How it works</a>
      </nav>

      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Terms</a>
        <a className="link link-hover">Privacy</a>
      </nav>

      <nav>
        <h6 className="footer-title">Follow</h6>
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover"><FaFacebook /></a>
          <a className="link link-hover"><FaYoutube></FaYoutube></a>
          <a className="link link-hover"><FaWhatsapp></FaWhatsapp></a>
        </div>
      </nav>

    </footer>
  );
};

export default Footer;