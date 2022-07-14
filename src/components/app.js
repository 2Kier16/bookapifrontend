import React, { Component } from "react";
import axios from "axios";

import Book from "./book";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:3000/books", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response);
        this.setState({ books: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderBooks() {
    return this.state.books.map((book) => {
      return <Book key={book.id} bookData={book} />;
    });
  }

  render() {
    return (
      <div className="app">
        <h1>The Library</h1>
        <div>{this.renderBooks()}</div>
      </div>
    );
  }
}
