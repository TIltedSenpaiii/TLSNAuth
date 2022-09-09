import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import {Button} from "./Button";
import "./Navbar.css";
import {useLogout} from "../hooks/useLogout"
import {useAuthContext} from "../hooks/useAuthContext"

function Navbar() {
  const {user} = useAuthContext()
  const {logout} = useLogout()
  const handleLogout = () =>{
    logout()

  }
 
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to ="/" className="navbar-logo">
                TLSN <i className="fa-solid fa-ghost"></i>
            </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ?"fas fa-times":"fas fa-bars"}/>
        </div>
        <ul className={click?"nav-menu active":"nav-menu"}>
            <li className ="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home 
                </Link>
            </li>
            <li className ="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Generator 
                </Link>
            </li>
            <li className ="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Communities 
                </Link>
            </li>
            <li className ="nav-item">
                <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign Up 
                </Link>
            </li>
        </ul>
        {!user&&(
       <button>login</button>)}
        {user &&(
        <button onClick={handleLogout}>Logout</button>)}
    </nav>
    </>
  
  )
}

export default Navbar