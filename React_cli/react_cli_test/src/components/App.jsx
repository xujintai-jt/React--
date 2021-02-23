import logo from '../logo.svg';


export default function App() {
  return (
    <div className="App-root">
      {/* 块级元素继承父元素的text-align，行内元素执行父元素的text-align */}
      <img  className="App-img-style" src={logo} alt="logo" />
      <p className="App-p-style">react app组件</p>
      <span>span</span>
      <hr/>
      <input type="text" placeholder="我是行内块元素"/>
    </div>
  )
}


// function App() {
//   return <img src={logo} alt="logo"/>
// }
// export default App;
