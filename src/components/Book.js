import React, { Component } from "react";

const Book = props => (
  <div>
    Title: {props.title}
    <br />
    Author: {props.author} <br />
    <button
      onClick={e => {
        props.handleDeleteBook(props.id);
      }}
    >
      Delete
    </button>
  </div>
);

export default Book;
