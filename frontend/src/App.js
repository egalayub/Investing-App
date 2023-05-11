import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
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
          <Route path="/Register" element={<Register />}>
          </Route>
          <Route path="/Login" element={<Login />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
