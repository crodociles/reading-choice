import React, { Component } from "react";
import AddBook from "./AddBook";
import BookList from "./BookList";
import Choice from "./Choice";
import Header from "./Header";

class ReadingChallengeApp extends Component {
  state = {
    bookList: []
  };

  onSubmitBookHandle = book => {
    this.setState(prevState => ({ bookList: prevState.bookList.concat(book) }));
  };

  deleteBook = bookToRemove => {
    this.setState(prevState => ({
      bookList: prevState.bookList.filter(book => {
        return bookToRemove != book.id;
      })
    }));
  };

  onChooseBook = bookList => {
    const r = Math.floor(Math.random() * this.state.bookList.length);
    alert(
      `You should read ${this.state.bookList[r].title} by ${
        this.state.bookList[r].author
      }`
    );
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("bookList");
      const bookList = JSON.parse(json);
      if (bookList) {
        this.setState(() => ({ bookList }));
      }
    } catch (e) {
      //Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.bookList.length !== this.state.bookList.length) {
      const json = JSON.stringify(this.state.bookList);
      localStorage.setItem("bookList", json);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <AddBook onSubmitBookHandle={this.onSubmitBookHandle} />
        <Choice
          onChooseBook={this.onChooseBook}
          hasChoices={this.state.bookList.length > 0}
        />
        <BookList
          bookList={this.state.bookList}
          handleDeleteBook={this.deleteBook}
        />
      </div>
    );
  }
}

export default ReadingChallengeApp;
