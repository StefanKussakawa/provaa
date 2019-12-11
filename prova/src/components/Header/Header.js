import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">
                    <div className="container-header">
                        <h1>Este é o componente 1!</h1>
                    </div>
                </NavLink>
            </div>

        );
    }
} 

export default Header;