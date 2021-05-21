/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const Mail = ({ inputMail, setMail }) => (
  <div className="main__form__up__right">
    <label htmlFor="mail" className="main__form__up__right__label">
      Mail
    </label>
    <input
      type="email"
      className="main__form__up__right__input"
      required
      name="mail"
      value={inputMail}
      onChange={(event) => {
        setMail(event.target.value);
      }}
    />
  </div>
);

Mail.propTypes = {
  inputMail: PropTypes.string.isRequired,
  setMail: PropTypes.func.isRequired,
};

export default Mail;
