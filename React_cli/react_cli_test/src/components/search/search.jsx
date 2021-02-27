import { Component } from "react";
import axios from 'axios'
import PropTypes from 'prop-types';

export default class Search extends Component {

  constructor(props) {
    super(props)

    //绑定this
    this.searchInfoChange = this.searchInfoChange.bind(this);
    this.getInfo = this.getInfo.bind(this)
  }

  searchInfoChange(event) {
    const searchInfo = event.target.value
    this.props.searchInfoChange(searchInfo)
  }

  getInfo() {
    const { searchInfo } = this.props
    const url = `https://api.github.com/users?=${searchInfo}`
    axios.get(url).then(Response => {
      console.log(Response);
    }).catch(error => {
      console.log(error);
    })
  }


  render() {
    const {searchInfo}=this.props
    return (
      <header className="search-header">
        <h2 className="margin-left">Search Github Users</h2>
        <section className="margin-left">
          <input type="text" value={searchInfo}  onChange={this.searchInfoChange} />
          <button onClick={this.getInfo}>Search</button>
        </section>
      </header>
    );
  }
}


Search.propTypes = {
  searchInfo:PropTypes.string.isRequired,
  searchInfoChange:PropTypes.func.isRequired
}