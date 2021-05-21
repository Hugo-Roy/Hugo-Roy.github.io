/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { motion } from 'framer-motion';
import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <ul className="footer__list">
      <motion.li
        className="footer__list__item"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <a className="footer__list__item__link" href="https://www.linkedin.com/in/roy-hugo/"><i className="fab fa-linkedin" /></a>
      </motion.li>
      <motion.li
        className="footer__list__item"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <a className="footer__list__item__link" href="https://github.com/Hugo-Roy"><i className="fab fa-github-square" /></a>
      </motion.li>
    </ul>
  </footer>
);

export default Footer;
