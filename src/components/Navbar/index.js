/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import hamburger from 'src/assets/hamburger.svg';
import './navbar.scss';
import classNames from 'classnames';

const Navbar = ({ clicked, setClicked }) => {
  const cssClass = classNames('header__nav', { header__nav__open: clicked });

  const rotate = (clicked ? '180deg' : '90deg');

  return (
    <header className="header">
      <div className="header__toggle">
        <motion.img
          src={hamburger}
          alt="hamburger menu"
          className="header__toggle__hamburger"
          onClick={(event) => {
            setClicked((clicked) => !clicked);
            event.target.style.rotate = rotate;
          }}
        />
      </div>
      <nav className={cssClass}>
        <ul className="header__nav__list">
          <motion.li
            className="header__nav__list__item"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <NavLink to="/portfolio" className="header__nav__list__item__link">Portfolio</NavLink>
          </motion.li>
          <motion.li
            className="header__nav__list__item"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink to="/" className="header__nav__list__item__link">Home</NavLink>
          </motion.li>
          <motion.li
            className="header__nav__list__item"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <NavLink to="/contact" className="header__nav__list__item__link">Contact</NavLink>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  clicked: PropTypes.bool.isRequired,
  setClicked: PropTypes.func.isRequired,
};

export default Navbar;
