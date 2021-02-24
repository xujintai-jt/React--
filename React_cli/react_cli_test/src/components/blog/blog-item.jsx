import { Component } from "react";
export default class BlogItem extends Component {
  constructor(props) {
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(event) {
  console.log(event);
  }

  render() {
    const {item}= this.props
    return (
            <div className="list-box">
              <h3>{item.name}说:</h3>
              <p className="flex-container">
                <span className="list-margin">{item.remarks}!</span>
                <button onClick={this.deleteTodo}  >删除</button>
              </p>
            </div>
    );
  }
}
