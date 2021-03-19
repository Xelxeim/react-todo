import React, { Component } from "react";

import './App.css';

import AppHeader from "../AppHeader";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";

export default class App extends Component {

  state = {
    data: [
      {key: "sdka", text: "MonkaS", important: false}, 
      {key: "dsas", text: "MonkaGIGA", important: false},
      {key: "dqq", text: "peepoRot", important: false}
    ]
  }

  onToggleImportant = (id, important) => {
    this.setState(({ data }) => {
      const index = data.findIndex(item => item.key === id),
            elem = data[index],
            modifiedElem = {...elem, important: !important},
            modifiedData = [...data.slice(0, index), modifiedElem, ...data.slice(index + 1)];
      return {
        data: modifiedData
      }
    })
  }

  render(){
    const { data } = this.state;
    return (
      <div className="App">
        <AppHeader />
        <div className="container">
          <PostList 
            data={data}
            onToggle={this.onToggleImportant}
          />
          <PostAddForm />
        </div>

      </div>
    );
  }

}

