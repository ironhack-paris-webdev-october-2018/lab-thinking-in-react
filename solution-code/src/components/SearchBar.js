import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <section className="SearchBar">
        <label>
          <h2>Search</h2>
          <input
            onChange={event => this.props.searchChange(event)}
            value={this.props.search}
            name="productSearch"
            type="search"
          />
        </label>

        <label>
          <input
            onChange={event => this.props.inStockChange(event)}
            checked={this.props.inStock}
            name="showInStock"
            type="checkbox"
          />
          Only show products in stock
        </label>
      </section>
    );
  }
}

export default SearchBar;
