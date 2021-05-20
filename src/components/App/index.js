// == Import npm
import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
// == Import
import './styles.scss';
import Navbar from 'src/components/Navbar';

// == Composant
const App = () => (
  <div className="app">
    <Navbar />
  </div>
);

// == Export
export default App;
