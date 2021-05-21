/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTpes from 'prop-types';

const Message = ({ inputMessage, setMessage }) => (
  <div className="main__form__down">
    <label htmlFor="message" className="main__form__down__label">
      Message
    </label>
    <textarea
      type="text"
      className="main__form__down__message"
      required
      name="message"
      value={inputMessage}
      onChange={(event) => {
        setMessage(event.target.value);
      }}
    />
  </div>
);

Message.propTypes = {
  inputMessage: PropTpes.string.isRequired,
  setMessage: PropTpes.func.isRequired,
};

export default Message;
