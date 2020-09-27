import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';

export const Routes = {
    home: '/',
    login: '/login',
    user: '/user',
    admin: '/admin'
}

export default () => (
    <Router>
        <Switch>
            <Route exact path={Routes.login} component={() => (<div>Hello, login!</div>)} />
            <Route exact path={Routes.user} component={() => (<div>Hello, user!</div>)} />
            <Route exact path={Routes.admin} component={() => (<div>Hello, admin!</div>)} />
            <Route exact path={Routes.home} component={Home} />
        </Switch>
    </Router>
);
