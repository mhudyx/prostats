import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Content.scss';

import { HomePage } from '../../pages';

const Content = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
        </main>
    )
}

export default Content;