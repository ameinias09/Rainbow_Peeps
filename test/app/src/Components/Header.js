import React from 'react'

const Header = () => {
  return (
    <div>    <nav className="navbar">
    <div className="logo"><img className="logoimg" src="C:\Users\sanka\Documents\ProjectSummer22\Pics\rainbow peeps.png" /></div>
  
    <ul className="nav-links">
        
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
        
        <div className="menu">
            <li className="tree">
                <a href="/">Forums</a>
               
                <ul className="dropdown">
                    <li><a href="/">Member Introduction </a></li>
                    <li><a href="/">Finding Friends</a></li>
                    <li><a href="/">LGBTQ+ discussions & Advice</a></li>
                    <li><a href="/">Mental Health</a></li>
                    <li><a href="/">General Chat</a></li>
                </ul>
            </li>
            <li><img src="C:\Users\sanka\Documents\ProjectSummer22\Pics\icons8-notification-sf-black-filled-32.png" /></li>
            <li><img src="C:\Users\sanka\Documents\ProjectSummer22\Pics\icons8-messages-ios-glyph-32.png" /></li>
            <li><a href="/">Profile</a></li>
            <li><a href="/">Logout</a></li>
        </div>
    </ul>
</nav></div>
  )
}

export default Header