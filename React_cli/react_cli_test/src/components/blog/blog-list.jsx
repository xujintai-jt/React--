import { Component } from "react";
import BlogItem from "./blog-item";

export default class BlogAdd extends Component {
 
  render() {
    return (
      <div>
        <h3>评论回复:</h3>
        {this.props.todos.map((item, index) => 
            <div key={index}>
             <BlogItem item={item} />
            </div>
        )}
      </div>
    );
  }
}
