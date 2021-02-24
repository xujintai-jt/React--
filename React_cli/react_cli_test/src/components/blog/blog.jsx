import BlogAdd from "./blog-add";
import BlogList from "./blog-list";
import { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <div className="flex-container">
          <BlogList />
          <BlogAdd />
        </div>
      </div>
    );
  }
}
