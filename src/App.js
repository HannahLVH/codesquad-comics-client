import React, {useState, useEffect} from "react";

import Header from "../src/shared/header";
import About from "./components/about";
import Admin from "./components/admin";
import Create from "./components/create";
import Home from "./components/home";
import Login from "./components/login";
import Signup from  "./components/signup";
import Update from "./components/update";
import Footer from "../src/shared/footer";

function App() {
const [user, setUser] = useState({})

useEffect (() => {
  localStorage.getItem("user")
}, [user])

  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
      <About/>
      <Admin/>
      <Create/>
      <Home/>
      <Login user={user} setUser={setUser}/>
      <Signup user={user} setUser={setUser}/>
      <Update/>
      <Footer/>
    </div>
  );
}

export default App;
