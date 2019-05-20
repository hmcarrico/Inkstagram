import React from 'react';
import {Switch, Route} from 'react-router-dom';
// Components
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Dashboard from './Components/dahsboard/Dashboard'

export default <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
    <Route path="/dashboard" component={Dashboard}/>
</Switch>