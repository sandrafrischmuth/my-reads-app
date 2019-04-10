import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import ListBooks from "./ListBooks";
import Search from "./search";
import "./App.css";

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  toggleSearch = () => {
    this.setState({showSearchPage: !this.state.showSearchPage})
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search closeSearch={this.toggleSearch} />
        ) : (
          <ListBooks />
        )}
        <div className="open-search">
          <button onClick={this.toggleSearch}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default BooksApp;
