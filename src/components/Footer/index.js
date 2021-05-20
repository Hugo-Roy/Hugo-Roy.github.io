/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <ul className="footer__list">
      <li className="footer__list__item">
        <a className="footer__list__item__link" href="#"><i className="fab fa-linkedin" /></a>
      </li>
      <li className="footer__list__item">
        <a className="footer__list__item__link" href="#"><i className="fab fa-github-square" /></a>
      </li>
    </ul>
  </div>
);

export default Footer;
