import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AdminPage from './AdminPage';
import Header from './Header';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import UserPage from './UserPage';

const Routes = {
    home: '/',
    login: '/login',
    user: '/user',
    admin: '/admin'
}

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path={Routes.login} component={LoginPage} />
            <Route exact path={Routes.user} component={UserPage} />
            <Route exact path={Routes.admin} component={AdminPage} />
            <Route exact path={Routes.home} component={HomePage} />
        </Switch>
    </Router>
);