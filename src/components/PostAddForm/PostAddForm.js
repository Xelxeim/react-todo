import React, { Component } from "react";

import "./PostAddForm.css";

export default class PostAddForm extends Component {
  
  state = {
    value: "",
  }

  handleInput = (e) => {
    const currentValue = e.target.value;
    this.setState(() => {
      return {
        value: currentValue,
      }
    })
  }

  handleSubmit = (e) => {
    const { onAdd } = this.props,
          { value } = this.state
    e.preventDefault();
    onAdd(value);
    this.setState(() => {
      return {
        value: ""
      }  
    })
  }

  render(){

    return (
      <form onSubmit={this.handleSubmit} className="postadder mt-2rem">
        <input 
          placeholder="Введите дело" 
          onChange={this.handleInput} 
          className="postadder__input"
          value={this.state.value}
        >
        </input>
        <button className="btn submit">
          Добавить
        </button>
      </form>
    )
  }
}

