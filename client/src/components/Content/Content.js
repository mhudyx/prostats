import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './Content.scss';

import { HomePage, EMPage, RLPage, TeamsPage } from '../../pages';

const Content = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/eumasters" component={EMPage} />
                <Route path="/leagues" component={RLPage} />
                <Route path="/teams" component={TeamsPage} />
            </Switch>
        </main>
    )
}

export default Content;