import React from 'react';
import {Switch, Route} from 'react-router-dom';
// Components
import Login from './Components/Login/login'

export default <Switch>
    <Route path='/' component={Login}/>
</Switch>