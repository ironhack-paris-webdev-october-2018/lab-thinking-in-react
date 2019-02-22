import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <section className="SearchBar">
        <div className="field">
          <label htmlFor="search-field" className="label">
            <h2>Search</h2>
          </label>
          <div className="control">
            <input
              onChange={event => this.props.searchChange(event)}
              value={this.props.search}
              name="productSearch"
              type="search"
              id="search-field"
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="checkbox">
            <input
              onChange={event => this.props.inStockChange(event)}
              checked={this.props.inStock}
              name="showInStock"
              type="checkbox"
            />{" "}
            Only show products in stock
          </label>
        </div>
      </section>
    );
  }
}

export default SearchBar;
