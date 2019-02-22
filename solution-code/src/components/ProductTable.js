import React, { Component } from "react";

import "./ProductTable.css";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    const { productArray } = this.props;

    return (
      <table className="ProductTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productArray.map(oneProduct => {
            return (
              <ProductRow key={oneProduct.name} productInfo={oneProduct} />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
