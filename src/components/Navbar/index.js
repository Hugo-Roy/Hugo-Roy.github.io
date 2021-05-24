/* eslint-disable no-shadow */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import hamburger from 'src/assets/hamburger.svg';
import './navbar.scss';
import classNames from 'classnames';

const Navbar = ({ clicked, setClicked }) => {
  const cssClass = classNames('header__nav', { header__nav__open: clicked });
  const hamburgerToggleClass = classNames('header__toggle__hamburger', { header__toggle__hamburger__switch: clicked});
  const hamb = useRef();
  const switchNav = () => {
    setClicked((clicked) => !clicked);
  };

  return (
    <header className="header">
      <div className="header__toggle">
        <motion.img
          ref={hamb}
          src={hamburger}
          alt="hamburger menu"
          className={hamburgerToggleClass}
          onClick={switchNav}
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
            <NavLink
              to="/portfolio"
              className="header__nav__list__item__link"
              onClick={switchNav}
            >
              Portfolio
            </NavLink>
          </motion.li>
          <motion.li
            className="header__nav__list__item"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink
              to="/"
              className="header__nav__list__item__link"
              onClick={switchNav}
            >
              Home
            </NavLink>
          </motion.li>
          <motion.li
            className="header__nav__list__item"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <NavLink
              to="/contact"
              className="header__nav__list__item__link"
              onClick={switchNav}
            >
              Contact
            </NavLink>
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
