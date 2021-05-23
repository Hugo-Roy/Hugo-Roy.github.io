/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import './contact.scss';
import Name from 'src/containers/Contact/Name';
import Mail from 'src/containers/Contact/Mail';
import Message from 'src/containers/Contact/Message';
import { motion } from 'framer-motion';

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

  const contactVariants = {
    exit: {
      x: 1500,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="main">
      <motion.h2
        className="main__title"
        variants={contactVariants}
        initial={{ x: 1500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
        exit="exit"
      >
        Pour me contacter:
      </motion.h2>
      <form
        className="main__form"
        onSubmit={handleSubmit}
      >
        <div className="main__form__up">
          <Name />
          <Mail />
        </div>
        <Message />
        <motion.button
          type="submit"
          className="main__form__button"
          variants={contactVariants}
          initial={{ x: 1500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          exit="exit"
        >
          Envoyer
        </motion.button>
      </form>
    </main>
  );
};

Contact.propTypes = {
  clearForm: PropTypes.func.isRequired,
};

export default Contact;
