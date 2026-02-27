import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleReservation = () => {
    // Scroll to reservation section
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav>
      <div className="left">
        <h1 className="logo">BHUV</h1>
        <div className={showMenu ? "showmenu" : "navLinks"}>
          <div className="links">
            <a href="#heroSection" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#menu" onClick={closeMenu}>Menu</a>
            <a href="#qualities" onClick={closeMenu}>Services</a>
            <a href="#team" onClick={closeMenu}>Team</a>
          </div>
          <button className="menuBtn" onClick={handleReservation}>Reservation</button>
        </div>
      </div>
      
      <button 
        className="hamburger" 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <GiHamburgerMenu />
      </button>
    </nav>
  );
};

export default Navbar;
