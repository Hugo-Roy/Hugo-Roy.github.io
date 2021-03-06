// == Import npm
import React, { useState } from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
// == Import
import './styles.scss';
import Navbar from 'src/components/Navbar';
import Home from 'src/components/Home';
import Portfolio from 'src/components/Portfolio';
import Contact from 'src/containers/Contact';
import Footer from 'src/components/Footer';
import NoMatch from 'src/components/NoMatch';
import { AnimatePresence } from 'framer-motion';

// == Composant
const App = () => {
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState('');
  const location = useLocation();

  return (
    <div className="app">
      <Navbar clicked={clicked} setClicked={setClicked} />
      <AnimatePresence exitBeforeEnter>
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
          <Route
            exact
            path="/portfolio"
          >
            <Portfolio />
          </Route>
          <Route
            path="*"
          >
            <NoMatch />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

// == Export
export default App;
