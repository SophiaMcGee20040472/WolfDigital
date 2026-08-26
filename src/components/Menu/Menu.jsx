import { useState } from "react";
import "./Menu.css";

import wolfgangLogo from "../../assets/wlogo.webp";
import avatar from "../../assets/avatar.webp";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="menu">
      <div className="menu-bar">
        <div className="logo">
          <img src={wolfgangLogo} alt="Wolfgang Digital" />
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About Us</a>
          <a href="#insights">Insights</a>
          <a href="#careers">Careers</a>
        </nav>
        <div className="contact-wrapper">
          <a href="#contact" className="contact">
            <span className="contact-arrow">→</span>
            <span className="contact-text">Contact Us</span>
          </a>
          <div className="avatar">
            <img src={avatar} alt="Contact" />
          </div>
        </div>
        <button
          type="button"
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav
        className={`mobile-nav ${menuOpen ? "show" : ""}`}
        aria-label="Mobile navigation"
      >
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#work" onClick={closeMenu}>
          Work
        </a>
        <a href="#about" onClick={closeMenu}>
          About Us
        </a>
        <a href="#insights" onClick={closeMenu}>
          Insights
        </a>
        <a href="#careers" onClick={closeMenu}>
          Careers
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact Us
        </a>
      </nav>
    </header>
  );
}

export default Menu;
