import React from "react";

const Header = () => {
    return (
    <main>
        <header>
            <nav className="nav-container">
                <span className="nav-banner-container">
                <a href="#"><img src="./images/CodeSquad-Comics-logo.png" alt="blue rectangular banner with ¸the words 'CodeSquad Comics' written in teal on the right side and green and yellow books of different sizes on the left side" className="nav-banner-img"/></a>
                </span>
                <div className="nav-menu-container">
                    <ul class="nav-menu-list nav-link-styling">
                        <li className="nav-horizontal-menu"><a href="#">HOME</a></li>
                        <li className="nav-horizontal-menu"><a href="#">ABOUT</a></li>
                        <li className="nav-horizontal-menu"><a href="#">LOGIN</a></li>
                    </ul>
                </div>
                <div className="hamburger-menu">
                    <i className="fa-solid fa-bars" 
                    style={{color: "#ffffff"}}
                    ></i>  
                </div>
            </nav>
        </header>
    </main>
    )
  }

export default Header;