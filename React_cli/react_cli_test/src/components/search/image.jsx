import { Component } from "react";
import PropTypes from 'prop-types';
import ImageItem from "./image-item";

export default class Image extends Component {
  



  render() {
    const { Response } = this.props
    if (Response instanceof Object) {
      const { items } = Response.data
      return (
        <div className="flex-imageItem">
          { items.map((item) => {
          return <ImageItem item={item}  />
        })}
       </div>
      )
    }
    else {
      return (
        <h1>暂无信息</h1>
      )
    }
    
  }
}

Image.propTypes = {
  Response: PropTypes.object.isRequired
}