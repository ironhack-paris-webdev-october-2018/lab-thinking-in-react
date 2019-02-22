import React, { Component } from "react";

import "./ProductRow.css";

class ProductRow extends Component {
  render() {
    const { productInfo } = this.props;
    return (
      <tr className="ProductRow">
        <td>{productInfo.name}</td>
        <td>{productInfo.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
