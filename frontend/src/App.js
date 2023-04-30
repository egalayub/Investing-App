import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar/Home';
import Login from './NavBar/Login';
import Register from './NavBar/Register';
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App font-BrunoAce">

<Router>
  <Routes>
<Route path="/Register" element = {<Register/>}>
            </Route>
            <Route path="/Login" element = {<Login/>}>
            </Route>
            </Routes>
</Router>
    </div>
  );
}

export default App;
