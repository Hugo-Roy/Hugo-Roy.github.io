// == Import npm
import React, { useState } from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
// == Import
import './styles.scss';
import Navbar from 'src/components/Navbar';

// == Composant
const App = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="app">
      <Navbar clicked={clicked} setClicked={setClicked} />
    </div>
  );
};

// == Export
export default App;
