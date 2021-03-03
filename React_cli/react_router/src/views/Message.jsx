import { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: 1,
          title: "message001",
          content: "我爱你，message001",
        },
        {
          id: 3,
          title: "message003",
          content: "我爱你，message003",
        },
        {
          id: 6,
          title: "message006",
          content: "我爱你，message006",
        },
      ],
    };
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <ul>
          {messages.map((item, index) => (
            <li key={index}>
              <Link to={`/Home/Message/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>

          <Route path="/Home/Message/:id"></Route>
      </div>
    );
  }
}
