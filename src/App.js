import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './styles/main.scss';
import Header from './components/Header';

import HomePage from './pages/Home';
import ContactPage from './pages/Contact';

function App() {
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
