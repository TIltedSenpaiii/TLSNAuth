import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="footer">
        <div className='footer-links'>
        <div className="navbar-container">
            <Link to ="/" className="navbar-logo">
            ©2022 TLSN <i className="fa-solid fa-ghost"></i>
            </Link>
        </div>
                <li>
                    <Link to ="/" className='link'>Impressum</Link>
                </li>
                <li>
                    <Link to ="/" className='link'>Datenschutz</Link>
                </li>
                <li>
                    <Link to ="/" className='link'>Kontakt</Link>
                </li>

        </div>
    </div>
  )
}

export default Footer