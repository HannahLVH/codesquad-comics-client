import Header from "../src/shared/header";
import About from "./components/about";
import Admin from "./components/admin";
import Create from "./components/create";
import Home from "./components/home";
import Login from "./components/login";
import Update from "./components/update";
import Footer from "../src/shared/footer";

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
