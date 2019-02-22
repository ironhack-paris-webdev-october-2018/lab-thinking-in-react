import React, { Component } from "react";

import "./ProductTable.css";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    const { productArray, filterText } = this.props;
    const lowerFilter = filterText.toLowerCase();

    const filteredArray = productArray.filter(oneProduct => {
      const lowerName = oneProduct.name.toLowerCase();
      return lowerName.includes(lowerFilter);
    });

    return (
      <section className="ProductTable">
        {filteredArray.length === 0 ? (
          <p>
            Your search <strong>"{filterText}"</strong> did not match any
            products.
          </p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredArray.map(oneProduct => {
                return (
                  <ProductRow key={oneProduct.name} productInfo={oneProduct} />
                );
              })}
            </tbody>
          </table>
        )}
      </section>
    );
  }
}

export default ProductTable;
