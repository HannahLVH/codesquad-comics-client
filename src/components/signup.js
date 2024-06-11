import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
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
        const body = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        e.preventDefault();
        console.log("Method running successfully", signUp)

        fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200) {
                localStorage.setItem("user", JSON.stringify(result.data));
                console.log("Success! You are signed up");
                navigate("/admin")
            } else {
                throw new Error (result.error.message)
            }
        })
        .catch((error) => console.log("Error", error));
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

