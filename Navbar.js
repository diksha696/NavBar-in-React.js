import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const[isMobile,setisMobile]= useState("false");
  
  return (
    <>
    {/* navbar code */}
     <nav className='navbar'>

        {/* this is the logo */}
        <h3 className='logo'>LOGO</h3>

        {/* menu link code starts*/}
        <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setisMobile(false)}>

            <Link to="/" className='home'>
                <li>Home</li>
            </Link>
            
            <Link to="/about" className='about'>
                <li>About</li>
            </Link>

            <Link to="/blogs" className='blogs'>
                <li>Blogs</li>
            </Link>

            <Link to="/contact" className='contact'>
                <li>Contact</li>
            </Link>

            {/* <Link to="/signup" className='signup'>
                <li>Sign-Up</li>
            </Link>

            <Link to="/login" className='login'>
                <li>Log-In</li>
            </Link> */}

        </ul>

         {/* button for mobile setup */}

         <button className='mobile-menu-icon'
           onClick={() => setisMobile(!isMobile)}>
            {isMobile ? (
                <i className='fas fa-times'></i>
            ) : (
                <i className='fas fa-bars'></i>
            )}
         </button>

     </nav>

        {/* hero section  */}
      
       <section className="hero-section">
        <p>Welcome to </p>
        <h5>My NavBar </h5>
      
      </section>  
    </>
  )
}

export default Navbar;