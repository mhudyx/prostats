import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const navList = [
    {name: "Home", path: "/", exact: true},
    {name: "European Masters", path: "/eumasters"},
    {name: "Regional Leagues", path: "/leagues"},
    {name: "Teams", path: "/teams"}
];

const Navigation = () => {

    const menu = navList.map(item => (
        <NavLink to={item.path} exact={item.exact ? item.exact : false} key={item.name}>{item.name}</NavLink>
    ))

    return (
        <nav>
            <div className="nav__logo"></div>
            <div className="nav__navbar">
                {menu}
            </div>
        </nav>
    )
}

export default Navigation;