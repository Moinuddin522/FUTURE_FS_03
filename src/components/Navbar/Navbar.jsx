import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaTooth } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <FaTooth className="logo-icon" />
          <span>SmileCare</span>
        </Link>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>

        <button className="appointment-btn">
          Book Appointment
        </button>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiOutlineMenuAlt3 />
        </div>
      </div>
    </header>
  );
};

export default Navbar;