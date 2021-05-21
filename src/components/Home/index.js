/* eslint-disable max-len */
import React from 'react';
import { motion } from 'framer-motion';
import './home.scss';

const Home = () => (
  <main className="main">
    <div className="main__container">
      <motion.h1
        className="main__container__title"
        initial={{ x: 1500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
      >Bonjour! <br /> Je suis Hugo, <br /> développeur web
      </motion.h1>
    </div>
    <div className="main__left">
      <motion.p
        className="main__left__text"
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </motion.p>
    </div>
  </main>
);

export default Home;
