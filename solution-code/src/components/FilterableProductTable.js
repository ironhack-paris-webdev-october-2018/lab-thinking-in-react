import React, { Component } from "react";

import "./FilterableProductTable.css";
import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productSearch: ""
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { products } = this.props;
    return (
      <section className="FilterableProductTable">
        <h1>IronStore</h1>

        <SearchBar
          search={this.state.productSearch}
          searchChange={event => this.genericOnChange(event)}
        />
        <ProductTable
          filterText={this.state.productSearch}
          productArray={products.data}
        />
      </section>
    );
  }
}

export default FilterableProductTable;
