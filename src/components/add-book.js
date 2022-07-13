import React, { useState } from "react";
import axios from "axios";

export default function addBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const postBook = (event) => {
    axios
      .post("https://kvt-bookstore-api.herokuapp.com/book/add", {
        name: name,
        author: author,
        price: price,
        description: description,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    event.preventDefault();
  };

  return (
    <div className="add-book">
      <h1 className="add-book-title">Book Suggestion Form</h1>
      <h3>
        Please fill out the form below & then click on the Add Suggestion button
        at the bottom of the form.
      </h3>
      <form className="add-book-form" onSubmit={postBook}>
        <input
          className="add-book-form-input"
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Book Name"
        />
        <input
          className="add-book-form-input"
          onChange={(event) => setAuthor(event.target.value)}
          type="text"
          placeholder="Author"
        />
        <input
          className="add-book-form-input"
          onChange={(event) => setPrice(event.target.value)}
          type="number"
          placeholder="Price if known"
        />
        <textarea
          className="add-book-form-textarea"
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Description"
        />
        <button className="add-book-form-button">Add Suggestion</button>
      </form>
    </div>
  );
}
