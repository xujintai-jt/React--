import { Component } from 'react'

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news:['news001','news002','news003']
    }
 }


  render() {
    const {news} = this.state
    return (
      <ul>
        {
          news.map(
            (item, index) =>
            <li key={index}>{item}</li>
          )
        }
      </ul>
    )
  }
}