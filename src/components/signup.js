import React, {useState} from "react";

const Signup = () => {
    const [signUp, setSignUp] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setSignUp((prevSetSignUp) => ({...prevSetSignUp, [name]: value}))
    }

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        console.log("Method running successfully")
        console.log(signUp)
    }

    return (
    <main className="content-section">
        <div className="text-container-1">
                <header>
                    <h1>SIGN UP</h1>
                </header>
                <div className="form-container">
                    <form action="#" onSubmit={handleSignUpSubmit}>
                        <div className="form-fields">
                            
                            <div>
                                <label htmlFor="firstName"> First Name: </label>
                                <input type="text" name="firstName" id="firstName" placeholder="First Name"
                                value={signUp.firstName}
                                onChange={handleInputChange}
                                required />
                            </div>
                            <div>
                                <label htmlFor="lastName"> Last Name: </label>
                                <input type="text" name="lastName" id="lastName" placeholder="Last Name"
                                value={signUp.lastName}
                                onChange={handleInputChange}
                                required />
                            </div>
                            <div>
                                <label htmlFor="username">Email Address: </label>
                                <input type="text" name="username" id="username" placeholder="Email"
                                value={signUp.username}
                                onChange={handleInputChange}
                                required/>
                            </div>
                            <div>
                                <label htmlFor="password">Password: </label>
                                <input type="text" name="password" id="password" placeholder="Password"
                                value={signUp.password}
                                onChange={handleInputChange}
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
    </main>
    );
}

export default Signup;

