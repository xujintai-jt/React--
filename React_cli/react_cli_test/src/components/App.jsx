// import Blog from './blog/blog.jsx'

// export default function App() {
//   return (
//     <div >
//       <div className="App-title">请发表对React的评论</div>
//         <Blog></Blog>
//     </div>
//   )
// }

import { Component } from "react";
import Search from "./search/search.jsx";
import Image from "./search/image.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInfo: "",
      Response:""
    };
    //绑定this
    this.searchInfoChange = this.searchInfoChange.bind(this);
    this.setAxios = this.setAxios.bind(this);
  }

  searchInfoChange(searchInfo) {
    this.setState({
      searchInfo
    })
  }

  setAxios(Response) {
    this.setState({
      Response
    })
  }

  render() {
    const { searchInfo, Response } = this.state;
    return (
      <div className="app">
        <Search searchInfo={searchInfo} searchInfoChange={this.searchInfoChange} setAxios={this.setAxios} />
        <Image   Response={Response} />
      </div>
    );
  }
}
