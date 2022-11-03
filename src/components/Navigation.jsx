import React from 'react';
import {NavLink} from "react-router-dom"


function Navigation() {
    return (
        <div>
            <ul className='header-link'>
                <NavLink  to="/"className={(nav)=> (nav.isActive ? 'header-link-nav-active': "header-link-nav")} end ><li>Accueil</li></NavLink>
                <NavLink to="/about" className={(nav)=> (nav.isActive ? 'header-link-nav-active': "header-link-nav")} ><li >A Propos</li></NavLink>
            </ul>
        </div>
    );
};

export default Navigation;