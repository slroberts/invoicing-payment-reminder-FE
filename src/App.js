import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import GenerateInvoice from './pages/GenerateInvoice';

const App = () => {
  return (
    <div className='container w-full lg:w-5/6 px-8 h-screen '>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route
            path='/dashboard/generate-invoice/client/:id'
            exact
            component={GenerateInvoice}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
