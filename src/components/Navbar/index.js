import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './navbar.scss';

const Navbar = () => (
  <nav className="nav">
    <ul className="nav__list">
      <motion.li
        className="nav__list__item"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <NavLink to="/portfolio" className="nav__list__item__link">Portfolio</NavLink>
      </motion.li>
      <motion.li
        className="nav__list__item"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <NavLink to="/" className="nav__list__item__link">Home</NavLink>
      </motion.li>
      <motion.li
        className="nav__list__item"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <NavLink to="/contact" className="nav__list__item__link">Contact</NavLink>
      </motion.li>
    </ul>
  </nav>
);

export default Navbar;
