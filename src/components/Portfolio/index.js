import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import './portfolio.scss';

const Portfolio = () => {
  const portfolioVariants = {
    exit: {
      x: -1500,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <main className="portfolio">
      <Card />
      <motion.article
        className="portfolio__exemple"
        variants={portfolioVariants}
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        exit="exit"
      >
        <div className="portfolio__exemple__span">
          <motion.h3
            className="portfolio__exemple__span__next"
            variants={portfolioVariants}
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            exit="exit"
          >
            Ici bientôt votre projet!
          </motion.h3>
        </div>
        <motion.div
          className="portfolio__exemple__svg"
          variants={portfolioVariants}
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
          exit="exit"
        >
          <i className="fas fa-handshake portfolio__exemple__svg__hands" />
        </motion.div>
      </motion.article>
    </main>
  );
};

export default Portfolio;
