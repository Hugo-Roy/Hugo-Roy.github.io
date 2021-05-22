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
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </motion.p>
    </div>
  </main>
);

export default Home;
