import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App =() =>(
  <div>
    <NavBar />
    <Switch>
      <Route exact path = '/' component={Home} />
      <Route exact path = '/about' component={About} />
      <Route exact path = '/login' component={Login} />
      <ProtectedRoute exact path = '/dashboard' component={Dashboard} />
      <ProtectedRoute exact path = '/menus/:id' component={Menu} />
      <Route component ={NoMatch} />
    </Switch>
 </div>
);


export default App;

