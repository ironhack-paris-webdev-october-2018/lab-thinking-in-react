import React, { Component } from "react";

import "./FilterableProductTable.css";
import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  render() {
    const { products } = this.props;
    return (
      <section className="FilterableProductTable">
        <h1>IronStore</h1>

        <SearchBar />
        <ProductTable productArray={products.data} />
      </section>
    );
  }
}

export default FilterableProductTable;
