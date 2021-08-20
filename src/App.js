import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
