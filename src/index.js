import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/pages/_partials/Navbar';
import Home from './components/pages/Home';
import Calculator from './components/pages/Calculator';
import QuoteOfDay from './components/pages/QuoteOfDay';
import './index.css';

function Index() {
  return (
    <Router>
      <header className="absolute top-0 left-0 w-full">
        <Navbar />
      </header>
      <main className="p-4 pt-10 w-full flex flex-col min-h-screen">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <QuoteOfDay />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
