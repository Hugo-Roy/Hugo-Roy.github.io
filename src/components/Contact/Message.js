/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTpes from 'prop-types';
import { motion } from 'framer-motion';

const Message = ({ inputMessage, setMessage }) => (
  <div className="main__form__down">
    <motion.label
      htmlFor="message"
      className="main__form__down__label"
      initial={{ x: 1500 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      Message
    </motion.label>
    <motion.textarea
      type="text"
      className="main__form__down__message"
      required
      name="message"
      value={inputMessage}
      onChange={(event) => {
        setMessage(event.target.value);
      }}
      initial={{ x: 1500 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.1 }}
    />
  </div>
);

Message.propTypes = {
  inputMessage: PropTpes.string.isRequired,
  setMessage: PropTpes.func.isRequired,
};

export default Message;
