import React, { Component } from "react";
import axios from "axios";

import Book from "./pages/book";
import { Route, Switch } from "react-router";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:5000/book/get")
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
      return (
        <Switch>
          <div key={book.id}>
            <h1>book title: {book.name}</h1>
          </div>
          <Route path="/book" component={Book} />
        </Switch>
      );
    });
  }

  render() {
    return (
      <div className="app">
        <h1>My Books</h1>
        {this.renderBooks()}
      </div>
    );
  }
}
