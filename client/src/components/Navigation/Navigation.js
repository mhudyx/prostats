import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const navList = [
    {name: "Home", short: "H", path: "/", exact: true},
    {name: "European Masters", short: "EM", path: "/eumasters"},
    {name: "Regional Leagues", short: "RL", path: "/leagues"},
    {name: "Teams", short: "T", path: "/teams"}
];

const Navigation = () => {

    const menu = navList.map(item => (
        <NavLink to={item.path} exact={item.exact ? item.exact : false} key={item.name}>{item.name}</NavLink>
    ))

    const mobileMenu = navList.map(item => (
        <NavLink to={item.path} exact={item.exact ? item.exact : false} key={item.short}>{item.short}</NavLink>
    ))

    return (
        <nav>
            <div className="nav__logo">ProStats</div>
            <div className="nav__mobile-menu">
                {mobileMenu}
            </div>
            <div className="nav__normal-menu">
                {menu}
            </div>
        </nav>
    )
}

export default Navigation;