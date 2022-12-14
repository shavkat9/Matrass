import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__section">
          <ul className="navbar__lists">
            <li className="navbar__list">
                <a href="#">Katalog</a>
            </li>
            <li className="navbar__list">
                <a href="#">Aksiya</a>
            </li>
            <li className="navbar__list">
                <a href="#">Biz haqimizda</a>
            </li>
            <li className="navbar__list">
                <a href="#">Manzilimiz</a>
            </li>
            <li className="navbar__list">
                <a href="#">Aloqa</a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar;