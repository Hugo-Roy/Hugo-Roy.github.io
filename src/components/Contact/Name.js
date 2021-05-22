/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Name = ({ inputName, setName }) => (
  <div className="main__form__up__left">
    <motion.label
      htmlFor="name"
      className="main__form__up__left__label"
      initial={{ x: 1500 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
    >
      Nom
    </motion.label>
    <motion.input
      type="text"
      className="main__form__up__left__input"
      required
      name="name"
      value={inputName}
      onChange={(event) => {
        setName(event.target.value);
      }}
      initial={{ x: 1500 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7 }}
    />
  </div>
);

Name.propTypes = {
  inputName: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};

export default Name;
