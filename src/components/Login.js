import React, { useState } from "react";

const Login = () => {
    const [login, setLogin] = useState({
        username: "",
        password: "",
    })
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setLogin((prevSetLogin) => ({...prevSetLogin, [name]: value}))
        console.log("Method running successfully")
    }

    console.log(login)

    return (
    <div>
        <div className="content-section">
            <div className="text-container-1">
                    <header>
                        <h1>LOGIN</h1>
                    </header>
                    <div className="form-container">
                        <form action="#" onSubmit={handleLoginSubmit}>
                            <div className="form-fields">
                                <div>
                                    <label for="username">Email Address: </label>
                                    <input type="text" name="username" id="username" placeholder="Email"
                                    value={login.username}
                                    onChange={handleLoginSubmit}
                                    required/>
                                </div>
                                <div>
                                    <label for="password">Password: </label>
                                    <input type="text" name="password" id="password" placeholder="Password"
                                    value={login.password}
                                    onChange={handleLoginSubmit}
                                    required />
                                </div>
                                <div className="submit-button">
                                    <br/>
                                    <button className="submit-button yellow-button">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                <br/>
            </div>
        </div>
    </div>
    )
  }

export default Login;