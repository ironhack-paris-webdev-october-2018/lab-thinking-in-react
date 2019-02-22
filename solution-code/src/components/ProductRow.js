import React, { Component } from "react";

import "./ProductRow.css";

class ProductRow extends Component {
  render() {
    const { productInfo } = this.props;
    let classes = "ProductRow";

    if (!productInfo.stocked) {
      classes += " out-of-stock";
    }

    return (
      <tr className={classes}>
        <td className="name">{productInfo.name}</td>
        <td>{productInfo.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
