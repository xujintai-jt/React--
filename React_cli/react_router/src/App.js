import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
//自定义组件
import Home from "./views/Home.jsx";
import Profile from "./views/Profile.jsx";
import MyNavLink from "./components/My-NavLink";

function App() {
  return (
    <div className="App">
      <ul className="nav nav-tabs">
        <li role="presentation">
        <MyNavLink to="/Home">Home2</MyNavLink>
        </li>
        <li role="presentation">
        <MyNavLink to="/Profile">Profile2</MyNavLink>
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
