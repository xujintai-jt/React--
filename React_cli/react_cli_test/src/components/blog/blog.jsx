import BlogAdd from "./blog-add";
import BlogList from "./blog-list";
import { Component } from "react";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo=this.addTodo.bind(this)
  }

  addTodo(Todo) {
    const { todos } = this.state;
    todos.unshift(Todo);
    this.setState({
      todos,
    });
  }

  render() {
    return (
      <div>
        <div className="flex-container">
          <BlogAdd addTodo={this.addTodo} />
          <BlogList />
        </div>
      </div>
    );
  }
}
