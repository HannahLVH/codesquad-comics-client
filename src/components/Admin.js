import React from "react";

const Admin = () => {
    return (
      <div>
        <div className="nav-section">
            <nav className="nav-container">
                <span className="nav-banner-container">
                <a href="index.html"><img src="./public/images/CodeSquad-Comics-logo.png" alt="blue rectangular banner with the words 'CodeSquad Comics' written in teal on the right side and green and yellow books of different sizes on the left side" className="nav-banner-img"/></a>
                </span>
                <div className="nav-menu-container">
                    <ul className="nav-menu-list nav-link-styling">
                        <li className="nav-horizontal-menu"><a href="index.html">HOME</a></li>
                        <li className="nav-horizontal-menu"><a href="about.html">ABOUT</a></li>
                        <li className="nav-horizontal-menu"><a href="login.html">LOGIN</a></li>
                    </ul>
                </div>
                <div className="hamburger-menu">
                    <i className="fa-solid fa-bars" style="color: #ffffff;"></i>    
                </div>
            </nav>
        </div>
      </div>
    )
  }

export default Admin