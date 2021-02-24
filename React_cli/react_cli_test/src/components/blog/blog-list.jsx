import { Component } from "react";
import BlogItem from "./blog-item";

export default class BlogAdd extends Component {
 
  render() {
    const {todos,removeTodo}=this.props
    return (
      <div>
        <h3>评论回复:</h3>
        {todos.map((item, index) => 
            <div key={index}>
             <BlogItem item={item} index={index} removeTodo={removeTodo} />
            </div>
        )}
      </div>
    );
  }
}
