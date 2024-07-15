import React from "react";
//import logoImg from '../../assets/images/Sap-logo-700x700.jpg'
import './styles.css'


export function Navbar() {
        return (
            <header>
        <nav id='navbar'>
          <div className='nav-brand'>
              {/* <img src={logoImg} alt="" id='logo'/> */}
              <h1>Space Flight</h1>
          </div>
          <ul className="nave">
            <li><a href="#">Home</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </nav>
        
      </header>
        )
}

export default Navbar