import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './Content.scss';

import { HomePage, EMPage } from '../../pages';

const Content = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/eumasters" component={EMPage} />
            </Switch>
        </main>
    )
}

export default Content;