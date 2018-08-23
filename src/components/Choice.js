import React, { Component } from "react";

const Choice = props => (
  <div className="choice">
    <button
      className="choice-btn"
      onClick={props.onChooseBook}
      disabled={!props.hasChoices}
    >
      Choose a book!
    </button>
  </div>
);

export default Choice;
