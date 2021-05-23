import React from 'react';

import './noMatch.scss';

const NoMatch = () => (
  <div className="noMatch">
    <span className="noMatch__error">
      Cette page n'existe pas, merci de revenir à l'accueil!
    </span>
  </div>
);

export default NoMatch;
