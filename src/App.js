import Header from "../src/shared/Header";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Update from "./components/Update";
import Footer from "./shared/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Admin/>
      <Create/>
      <Home/>
      <Login/>
      <Update/>
      <Footer/>
    </div>
  );
}

export default App;
