import React from "react";

export default function Book(props) {
  return (
    <div>
      <h1>{props.bookData.name}</h1>
      <h3>{props.bookData.author}</h3>
      <p>{props.bookData.price}</p>
      <h5>{props.bookData.description}</h5>
    </div>
  );
}
