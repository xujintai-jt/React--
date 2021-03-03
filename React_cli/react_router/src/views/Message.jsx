import { Component } from 'react'

export default class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news:['message001','message002','message003']
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