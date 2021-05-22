import React from 'react';
import { motion } from 'framer-motion';
import atelier from 'src/assets/atelierdupoint.png';
import { ExternalLink } from 'react-feather';

const Card = () => {
  const cardVariants = {
    exit: {
      x: -1500,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.article
      className="portfolio__card"
      variants={cardVariants}
      initial={{ x: -1500 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
      exit="exit"
    >
      <a className="portfolio__card__link" href="https://atelierdupoint.fr">
        <div className="portfolio__card__link__preview">
          <motion.img
            className="portfolio__card__link__preview__image"
            src={atelier}
            alt="aperçus du site l\'atelier du point"
            variants={cardVariants}
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
            exit="exit"
          />
        </div>
        <div className="portfolio__card__link__description">
          <motion.h3
            className="portfolio__card__link__description__text"
            variants={cardVariants}
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            exit="exit"
          >
            L'Atelier Du Point <br /> - <br /> Tatouage <br /> <ExternalLink />
          </motion.h3>
        </div>
      </a>
    </motion.article>
  );
};

export default Card;
