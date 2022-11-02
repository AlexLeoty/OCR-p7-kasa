import React from 'react';
import {NavLink} from "react-router-dom"


function Navigation() {
    return (
        <div>
            <ul className='header-link'>
                <NavLink className='header-link-nav' to="/"><li>Accueil</li></NavLink>
                <NavLink className='header-link-nav' to="/about"><li >A propos</li></NavLink>
            </ul>
        </div>
    );
};

export default Navigation;