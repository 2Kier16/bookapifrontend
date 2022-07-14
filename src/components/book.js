import axios from "axios";
import React from "react";

export default function Book(props) {
  const deleteBook = () => {
    axios
      .delete(`http://localhost:5000/book/${props.bookData.id}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => console.log("success", response));
  };

  return (
    <div>
      <img className="book-img" src={props.bookData.img_url} />
      <h1>{props.bookData.name}</h1>
      <h3>{props.bookData.author}</h3>
      <p>{props.bookData.price}</p>
      <h5>{props.bookData.description}</h5>
      {/* <h6>{props.bookData.reading}</h6> */}
      <button onClick={deleteBook}>Delete</button>
    </div>
  );
}
