import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './Assets/imgs/logo_green.png';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <nav>
                    <figure>
                        <img id='logo' src={logo} alt='logo'/>
                    </figure>
                    <Link to='/portfolio' id="work">portfolio</Link>
                    <Link to='/' id="about">about</Link>
                </nav>
            </div>
        )
        
    }
}
export default Header;