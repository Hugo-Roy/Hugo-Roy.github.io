/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import './contact.scss';
import Name from 'src/containers/Contact/Name';
import Mail from 'src/containers/Contact/Mail';
import Message from 'src/containers/Contact/Message';

const Contact = ({ clearForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    clearForm();
    emailjs.sendForm(
      'portfolio',
      'template_ckrrxkx',
      event.target,
      'user_uuCIx0Dsk7canmnTdtSdu',
    )
      .then(() => {
        window.alert('Votre message a bien été envoyé, merci!');
      }, () => {
        window.alert('Une erreur est survenue... Merci de recommencer');
      });
  };

  return (
    <main className="main">
      <h2 className="main__title">Pour me contacter:</h2>
      <form
        className="main__form"
        onSubmit={handleSubmit}
      >
        <div className="main__form__up">
          <Name />
          <Mail />
        </div>
        <Message />
        <button
          type="submit"
          className="main__form__button"
        >
          Envoyer
        </button>
      </form>
    </main>
  );
};

Contact.propTypes = {
  clearForm: PropTypes.func.isRequired,
};

export default Contact;
