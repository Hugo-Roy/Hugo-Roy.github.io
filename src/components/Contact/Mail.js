/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Mail = ({ inputMail, setMail }) => {
  const mailVariants = {
    exit: {
      x: 1500,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="main__form__up__right">
      <motion.label
        htmlFor="mail"
        className="main__form__up__right__label"
        variants={mailVariants}
        initial={{ x: 1500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        exit="exit"
      >
        Mail
      </motion.label>
      <motion.input
        type="email"
        className="main__form__up__right__input"
        variants={mailVariants}
        required
        name="mail"
        value={inputMail}
        onChange={(event) => {
          setMail(event.target.value);
        }}
        initial={{ x: 1500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9 }}
        exit="exit"
      />
    </div>
  );
};

Mail.propTypes = {
  inputMail: PropTypes.string.isRequired,
  setMail: PropTypes.func.isRequired,
};

export default Mail;
