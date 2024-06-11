import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({user}) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        username: "",
        password: "",
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setLogin((prevSetLogin) => ({...prevSetLogin, [name]: value}));
    }

    const handleLoginSubmit = (e) => {
        const body = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        e.preventDefault();
        console.log("Method running successfully");
        console.log(login)

        fetch("http://localhost:8080/login/local", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200) {
                localStorage.setItem("user", JSON.stringify(result.data));
                console.log("Success! You are logged in");
                navigate("/admin")
            } else {
                throw new Error (result.error.message)
            }
        })
        .catch((error) => console.log("Error", error));
    }


    const handleLoggedIn = (e) => {
        console.log(`Welcome back, ${user.firstName}!`)
    }

    return (
    <main className="content-section">
        <div className="text-container-1">
                <header>
                    <h1>LOGIN</h1>
                </header>
                <div className="form-container">
                    <form action="#" onSubmit={handleLoginSubmit}>
                        <div className="form-fields">
                            <div>
                                <label htmlFor="username">Username: </label>
                                <input type="text" name="username" id="username" placeholder="Username"
                                value={login.username}
                                onChange={handleInputChange}
                                required/>
                            </div>
                            <div>
                                <label htmlFor="password">Password: </label>
                                <input type="text" name="password" id="password" placeholder="Password"
                                value={login.password}
                                onChange={handleInputChange}
                                required />
                            </div>
                            <div className="submit-button">
                                <br/>
                                <button className="submit-button yellow-button" onClick={handleLoggedIn}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            <br/>
        </div>
    </main>
    )
  }

export default Login;