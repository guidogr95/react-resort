import React, { Component } from 'react';
import Link from 'next/link';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import '../app.css'

export default class Navbar extends Component {
    state= {
        isOpne: false
    }
    handelToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        {/* <Link to="/">
                            <img src={logo} alt="logo"/>
                        </Link> */}
                        <button type="button" className="nav-btn">
                            <FaAlignRight className="nav-icon" onClick={this.handelToggle}/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/rooms/">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
