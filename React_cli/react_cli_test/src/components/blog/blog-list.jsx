import { Component } from "react";
import BlogItem from "./blog-item";

export default class BlogAdd extends Component {
 
  render() {
    const { todos, removeTodo } = this.props
    const display = todos.length>0?'none':'block'
      return (
        <div>
          <h3>评论回复:</h3>
          <h2 style={{display}}>暂无评论，点击左侧添加评论!</h2>
          {todos.map((item, index) => 
              <div key={index}>
               <BlogItem item={item} index={index} removeTodo={removeTodo} />
              </div>
          )}
        </div>
      );
    }
   
}
