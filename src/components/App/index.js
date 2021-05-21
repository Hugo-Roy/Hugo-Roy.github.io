// == Import npm
import React, { useState } from 'react';
import {
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
// == Import
import './styles.scss';
import Navbar from 'src/components/Navbar';
import Home from 'src/components/Home';
import Contact from 'src/containers/Contact';
import Footer from 'src/components/Footer';

// == Composant
const App = () => {
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState('');
  const location = useLocation();

  return (
    <div className="app">
      <Navbar clicked={clicked} setClicked={setClicked} />
      <Switch
        location={location}
        key={location.key}
      >
        <Route
          exact
          path="/"
        >
          <Home />
        </Route>
        <Route
          exact
          path="/contact"
        >
          <Contact value={value} setValue={setValue} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
