import { Component } from "react";
import PropTypes from "prop-types";


export default class ImageItem extends Component {

  render() {
    const { item } = this.props
    console.log(item);
    return (
      <div className="imageItem">
        <h1>ID{item.id}</h1>
        <img src={item.avatar_url} alt="" />
      </div>
    );
  }
}

ImageItem.propTypes = {
  item: PropTypes.object.isRequired,
};
