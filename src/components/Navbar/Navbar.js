import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
            <div className="nav">
                <a href = "/" className="nav-logo">
                    <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" />
                    <h1>GeeksFoods</h1>
                </a>
                <div className="navbar-menu">
                    <ul>
                        <li><a href="/" style = {{color: "rgb(59, 130, 246)"}}>Home</a></li>
                        <li><a href="/">Quote</a></li>
                        <li><a href="/">Resturants</a></li>
                        <li><a href="/">Foods</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-btn-container">
                    <button className="navbar-btn">Get Started</button>
                </div>
            </div>
        </nav>
  )
}