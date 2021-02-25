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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInfo: "",
    };
    //绑定this
    this.searchInfoChange = this.searchInfoChange.bind(this);
  }

  searchInfoChange(searchInfo) {
    this.setState({
      searchInfo
    })
  }

  render() {
    const { searchInfo } = this.state;
    return (
      <div className="app">
        <Search searchInfo={searchInfo} searchInfoChange={this.searchInfoChange} />
      </div>
    );
  }
}
