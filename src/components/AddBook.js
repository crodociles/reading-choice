import React, { Component } from "react";
import uuid from "uuid";

class AddBook extends Component {
  state = {
    title: "",
    author: "",
    id: ""
  };

  onSubmitBook = e => {
    e.preventDefault();
    const book = this.state;
    this.props.onSubmitBookHandle({
      title: this.state.title,
      author: this.state.author,
      id: uuid()
    });
  };

  onChangeTitle = e => {
    const title = e.target.value;
    this.setState({ title });
  };

  onChangeAuthor = e => {
    const author = e.target.value;
    this.setState(() => ({ author }));
  };
  render() {
    return (
      <div className="add-book">
        <form onSubmit={this.onSubmitBook}>
          <h3>Add your books</h3>
          <div className="flex">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={this.onChangeTitle} />
            <label htmlFor="author">Author</label>
            <input type="text" name="author" onChange={this.onChangeAuthor} />
          </div>
          <button className="add-btn">Add</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
