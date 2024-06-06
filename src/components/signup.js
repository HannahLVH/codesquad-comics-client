import React, {useState} from "react";

const Signup = ({user}) => {
    const [signUp, setSignUp] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
    })
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setSignUp((prevSetSignUp) => ({...prevSetSignUp, [name]: value}))
        console.log("Method running successfully")
        console.log(signUp)
    }

    const handleSignedUp = (e) => {
        console.log(`Thank you for signing up, ${user.firstName}!`)
    }



    return (
    <div>
        <div className="content-section">
            <div className="text-container-1">
                    <header>
                        <h1>SIGN UP</h1>
                    </header>
                    <div className="form-container">
                        <form action="#" onSubmit={handleSignUpSubmit}>
                            <div className="form-fields">
                                
                                <div>
                                    <label for="firstName"> First Name: </label>
                                    <input type="text" name="firstName" id="firstName" placeholder="First Name"
                                    value={signUp.firstName}
                                    onChange={handleSignUpSubmit}
                                    required />
                                </div>
                                <div>
                                    <label for="lastName"> Last Name: </label>
                                    <input type="text" name="lastName" id="lastName" placeholder="Last Name"
                                    value={signUp.lastName}
                                    onChange={handleSignUpSubmit}
                                    required />
                                </div>
                                <div>
                                    <label for="username">Email Address: </label>
                                    <input type="text" name="username" id="username" placeholder="Email"
                                    value={signUp.username}
                                    onChange={handleSignUpSubmit}
                                    required/>
                                </div>
                                <div>
                                    <label for="password">Password: </label>
                                    <input type="text" name="password" id="password" placeholder="Password"
                                    value={signUp.password}
                                    onChange={handleSignUpSubmit}
                                    required />
                                </div>
                                <div className="submit-button">
                                    <br/>
                                    <button className="submit-button yellow-button" onClick={handleSignedUp}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                <br/>
            </div>
        </div>
    </div>
    );
}

export default Signup;

