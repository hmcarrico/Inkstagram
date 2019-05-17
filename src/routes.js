import React from 'react';
import {Switch, Route} from 'react-router-dom';
// Components
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Dashboard from './Components/dahsboard/Dashboard'

export default <Switch>
    <Route path='/' component={Login}/>
    {/* <Route path='/' component={Register}/> */}
    <Route path="/dashboard" component={Dashboard}/>
</Switch>