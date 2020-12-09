import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import ShowApps from './components/ShowApps/ShowApps';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/show/:account" exact component={ShowApps} />
        <Route path="" component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
