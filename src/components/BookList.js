import React, { Component } from "react";
import Book from "./Book";

const BookList = props => (
  <div>
    {props.bookList.map(({ title, author, id }, index) => (
      <div key={index + 1}>
        <h1>Book Choice {index + 1}</h1>
        <Book
          key={id}
          title={title}
          author={author}
          id={id}
          handleDeleteBook={props.handleDeleteBook}
        />
      </div>
    ))}
  </div>
);

export default BookList;
