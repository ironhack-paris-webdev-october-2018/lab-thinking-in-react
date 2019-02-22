import React, { Component } from "react";

import "./FilterableProductTable.css";
import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productSearch: "",
      showInStock: false
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  checkboxOnChange(event) {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  }

  render() {
    const { products } = this.props;
    return (
      <section className="FilterableProductTable">
        <h1 className="title">IronStore</h1>

        <SearchBar
          search={this.state.productSearch}
          searchChange={event => this.genericOnChange(event)}
          inStock={this.state.showInStock}
          inStockChange={event => this.checkboxOnChange(event)}
        />
        <ProductTable
          filterText={this.state.productSearch}
          inStockOnly={this.state.showInStock}
          productArray={products.data}
        />
      </section>
    );
  }
}

export default FilterableProductTable;
