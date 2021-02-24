import { Component } from "react";
export default class BlogAdd extends Component {
  render() {
    return (
      <div>
        <h3>评论回复:</h3>
        {this.props.todos.map((item,index) => {
          return (
            <div className="list-box" key={index}>
              <h3>{item.name}说:</h3>
              <p>
                <span className="list-margin">{item.remarks}!</span>
              </p>
            </div>
          )
        })}
      </div>
    );
  }
}
