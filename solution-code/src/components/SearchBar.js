import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <section className="SearchBar">
        <label>
          <h2>Search</h2>
          <input name="productSearch" type="search" />
        </label>

        <label>
          <input name="showInStock" type="checkbox" />
          Only show products in stock
        </label>
      </section>
    );
  }
}

export default SearchBar;
