import "./App.css";
import { Route, Redirect, Switch, NavLink } from "react-router-dom";
import Home from "./views/Home.jsx";
import Profile from "./views/Profile.jsx";

function App() {
  return (
    <div className="App">
      <ul className="nav nav-tabs">
        <li role="presentation">
        <NavLink to="/Home">Home</NavLink>
        </li>
        <li role="presentation">
        <NavLink to="/Profile">Profile</NavLink>
        </li>
      </ul>
   
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Profile" component={Profile} />
        <Redirect to="/Profile"/>  
      </Switch>
    </div>
  );
}

export default App;
