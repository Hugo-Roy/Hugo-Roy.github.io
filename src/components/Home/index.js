/* eslint-disable max-len */
import React from 'react';
import { motion } from 'framer-motion';
import './home.scss';

const Home = () => (
  <main className="man">
    <div className="man__container">
      <motion.h1
        className="man__container__title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >Bonjour! <br /> Je suis Hugo, <br /> développeur web
      </motion.h1>
    </div>
    <div className="man__left">
      <motion.p
        className="man__left__text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        Après avoir appris le métier de développeur web à l'école <a className="man__left__text__a" href="https://oclock.io/">O'Clock</a>, je suis maintenant à la recherche d'un poste de développeur front-end! Je suis motivé, curieux et passionné. Je n'attends qu'intégrer votre entreprise pour créer, améliorer, développer.
      </motion.p>
    </div>
  </main>
);

export default Home;
