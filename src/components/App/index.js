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
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';

// == Composant
const App = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="app">
      <Navbar clicked={clicked} setClicked={setClicked} />
      <Home />
      <Footer />
    </div>
  );
};

// == Export
export default App;
