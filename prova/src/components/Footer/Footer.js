import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <NavLink to="/tela3">
                    <div className="container-footer">
                        <h2>Terceiro componente!</h2>
                    </div>
                </NavLink>
            </div>
        );
    }
} 

export default Footer;