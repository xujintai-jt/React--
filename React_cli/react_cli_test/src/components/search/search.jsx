
import {Component} from 'react'
export default class Search extends Component {


  render() {
    return (
      <header className="search-header">
        <h2 className="margin-left">Search Github Users</h2>
        <section className="margin-left">
          <input type="text"/> <button>Search</button>
       </section>
      </header>
    )
  }
}