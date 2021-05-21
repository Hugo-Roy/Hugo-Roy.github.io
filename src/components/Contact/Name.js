/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const Name = ({ inputName, setName }) => (
  <div className="main__form__up__left">
    <label htmlFor="name" className="main__form__up__left__label">
      Nom
    </label>
    <input
      type="text"
      className="main__form__up__left__input"
      required
      name="name"
      value={inputName}
      onChange={(event) => {
        setName(event.target.value);
      }}
    />
  </div>
);

Name.propTypes = {
  inputName: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};

export default Name;
