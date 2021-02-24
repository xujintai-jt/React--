import BlogAdd from "./blog-add";
import BlogList from "./blog-list";
import { Component } from "react";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { name: "wwf", remarks: "hahahahaha" },
        { name: "wwf2", remarks: "wowowowowo" },
      ],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(Todo) {
    const { todos } = this.state;
    todos.unshift(Todo);
    this.setState({
      todos,
    });
  }

  removeTodo(index) {
    const { todos } = this.state
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <div className="flex-container">
          <BlogAdd addTodo={this.addTodo} />
          <BlogList todos={todos} removeTodo={this.removeTodo}/>
        </div>
      </div>
    );
  }
}
