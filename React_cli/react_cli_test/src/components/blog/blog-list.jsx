import { Component } from "react";
import BlogItem from "./blog-item";

export default class BlogAdd extends Component {
  constructor(props) {
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(event) {
  console.log(event);
  }

  render() {
    return (
      <div>
        <h3>评论回复:</h3>
        {this.props.todos.map((item, index) => {
          return (
            <div key={index}>
             <BlogItem item={item} />
            </div>
          );
        })}
      </div>
    );
  }
}
