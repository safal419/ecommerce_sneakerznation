import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavScrollExample from "./components/Navbar/Navbar";
import Login from "./components/Froms/Login";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavScrollExample />
        <Routes>
          <Route exact path="/home" Component={Home} />
          <Route exact path="/loginandsignup" Component={Login} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
