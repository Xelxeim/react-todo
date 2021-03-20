import React, { Component } from "react";

import "./SearchPanel.css";

export default class SearchPanel extends Component {

  state = {
    pattern: ""
  }

  handleInput = (e) => {
    const currentValue = e.target.value,
          { onSearch } = this.props;
    this.setState(() => {
      return {
        pattern: currentValue,
      }
    });
    onSearch(currentValue);
  }

  render() {
    return(
      <input 
        placeholder="type to search"
        onChange={this.handleInput}
      >
      </input>
    )
  }


}

