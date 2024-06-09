import React from "react";

const Login = () => {
    return (
    <main className="content-section">
        <div className="text-container-1">
                <header>
                    <h1>LOGIN</h1>
                </header>
                <div className="form-container">
                    <form action="#">
                        <div className="form-fields">
                            <div>
                                <label htmlFor="username">Email Address: </label>
                                <input type="username" name="username" id="username" placeholder="Email"/>
                            </div>
                            <div>
                                <label htmlFor="password">Password: </label>
                                <input type="password" name="password" id="password" placeholder="Password" />
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
    </main>
    )
  }

export default Login;