import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import 'styles/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import CollectionPage from './pages/Collection';

function App() {
  useEffect(() => {
    document.title = 'CodeDrop';
  });
  return (
    <Router>
      <div>
        <Header/>

        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <Route path="/collection">
            <CollectionPage />
          </Route>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
