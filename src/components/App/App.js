import React, { Component } from "react";

import './App.css';

import AppHeader from "../AppHeader";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";

export default class App extends Component {

  state = {
    
  }

  render(){
    return (
      <div className="App">
        <AppHeader />
        <PostList />
        <PostAddForm />
      </div>
    );
  }

}

