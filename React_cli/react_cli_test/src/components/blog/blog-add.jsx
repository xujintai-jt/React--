import { Component } from "react";

export default class BlogList extends Component {
  state = {
    name: "",
    remarks: "",
  };

  commitClick = () => {
    this.props.addTodo(this.state);
  };

  nameChange = (event) => {
    const name = event.target.value.trim();
    this.setState({
      name,
    });
  };

  remarksChange = (event) => {
    const remarks = event.target.value.trim();
    this.setState({
      remarks,
    });
  };

  render() {
    const { name, remarks } = this.state;
    return (
      <div>
        <h5>用户名</h5>
        <input type="text" value={name} onChange={this.nameChange} />
        <h5>评论内容</h5>
        <textarea
          value={remarks}
          onChange={this.remarksChange}
          cols="30"
          rows="10"
        ></textarea>
        <div>
          <button onClick={this.commitClick}>提交</button>
        </div>
      </div>
    );
  }
}
