import React, { useEffect } from "react";
import userData from "../data/user";
import {useNavigate, Link} from "react-router-dom";

const Header = ({user, setUser}) => {
    const navigate = useNavigate();
    const id = "1";

    useEffect(() => {
        const findUser = userData.find((user) => user.id === id);
        setUser(findUser);
    }, [setUser]);

    const handleLogout = (e) => {
        fetch("http://localhost:8080/logout", {
            method: "GET",
            headers: {"Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((result) => {
                if(result.statusCode === 200) {
                    setUser({});
                    localStorage.removeItem("user");
                    console.log("You logged out successfully!")
                    navigate("/");
                } else {
                    throw new Error (result.error.message);
                    
                }
            })
            .catch((error) => console.log("Error", error)); 
            navigate("/admin");
    }


    return (
    <main>
        <header>
            <nav className="nav-container">
                <span className="nav-banner-container">
                <Link to="/"><img src="/images/CodeSquad-Comics-logo.png" alt="blue rectangular banner with ¸the words 'CodeSquad Comics' written in teal on the right side and green and yellow books of different sizes on the left side" className="nav-banner-img"/></Link>
                </span>
                <div className="nav-menu-container">
                    <h1> Welcome, {user.firstName}! </h1>
                    <ul className="nav-menu-list nav-link-styling">
                        <li className="nav-horizontal-menu"><Link to="/">HOME</Link></li>
                        <li className="nav-horizontal-menu"><Link to="/about">ABOUT</Link></li>
                        {user.username ? (
                        <>
                        <li className="nav-horizontal-menu"><Link to="/admin">ADMIN</Link></li>
                        <li className="nav-horizontal-menu"><a href="#" onClick={handleLogout}>LOGOUT</a></li>
                        </>
                        ) : (
                        <li className="nav-horizontal-menu"><Link to="/login">LOGIN</Link></li> 
                        )}
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