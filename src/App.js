import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Header from "../src/shared/header";
import About from "./components/about";
import Admin from "./components/admin";
import Create from "./components/create";
import Home from "./components/home";
import Login from "./components/login";
import Signup from  "./components/signup";
import Update from "./components/update";
import Footer from "../src/shared/footer";
import { Form } from "react-router-dom";

function App() {
const [user, setUser] = useState({})

useEffect (() => {
  localStorage.getItem("user")
}, [user])

  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>} user={user} setUser={setUser}/>
        <Route path="/signup" element={<Signup/>} user={user} setUser={setUser}/>
        <Route path="/update" element={<Update/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
