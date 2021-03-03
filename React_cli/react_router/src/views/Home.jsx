import { Component } from "react";
import { Switch, Route } from "react-router-dom";

// 引入公共组件
import MyNavLink from "../components/My-NavLink";
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home组件内容</h1>
        <ul className="nav nav-tabs">
          <li role="presentation">
            <MyNavLink to="/Home/News">News</MyNavLink>
          </li>
          <li role="presentation">
            <MyNavLink to="/Home/Message">Message</MyNavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/Home/News"  component={News} />
          <Route path="/Home/Message" component={Message} />
        </Switch>
      </div>
    );
  }
}
