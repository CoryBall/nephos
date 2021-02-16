import './App.global.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, NewDrivePage } from './pages';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/drives/new" component={NewDrivePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}
