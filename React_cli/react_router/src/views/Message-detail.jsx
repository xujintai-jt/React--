import { Component } from "react";

export default class MessageDetail extends Component {
  detailData = [
    {
      id: 1,
      msg: "hello,i am 1",
    },
    {
      id: 3,
      msg: "hello,i am 3",
    },
    {
      id: 6,
      msg: "hello,i am 6",
    },
  ];

  render() {
    const { id } = this.props.match.params;
    const showData=this.detailData.find(item=>item.id===Number(id))
    return <h2>{showData.msg}</h2>;
  }
}
