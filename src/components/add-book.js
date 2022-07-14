import React, { useState } from "react";
import axios from "axios";
import bookShelf from "../../static/assets/images/istockphoto.jpg";

export default function addBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const postBook = (event) => {
    axios
      .post(
        "http://127.0.0.1:5000/add-book",
        {
          name: name,
          author: author,
          price: price,
          description: description,
        },
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    event.preventDefault();
  };

  return (
    <div
      className="add-book"
      style={{
        height: "100%",
        width: "100%",
        background: "url(" + bookShelf + ") no-repeat",
        backgroundBlend: "screen",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="add-book-title">Book Suggestion Form</h1>
      <h3>
        Fill out the form & then click on the Add Suggestion button at the
        bottom of the form.
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
        {/* <input
          className="add-book-form-input"
          onChange={(event) => setReading(event.target.value)}
          type="text"
          placeholder="My reading Status"
        /> */}
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
