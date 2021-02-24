import { Component } from "react";

export default class BlogList extends Component {
  render() {
    return (
      <div>
        <h5>用户名</h5>
        <input type="text" />
        <h5>评论内容</h5>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div>
          <button>提交</button>
        </div>
      </div>
    );
  }
}
