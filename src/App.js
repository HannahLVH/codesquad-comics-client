import React, {useState, useEffect} from "react";

import Header from "../src/shared/Header";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from  "./components/Signup";
import Update from "./components/Update";
import Footer from "./shared/Footer";

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
