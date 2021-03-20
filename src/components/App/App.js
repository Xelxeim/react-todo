import React, { Component } from "react";

import './App.css';

import AppHeader from "../AppHeader";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";

export default class App extends Component {

  state = {
    data: [
      {key: "0", text: "MonkaS", important: false}, 
      {key: "1", text: "MonkaGIGA", important: false},
      {key: "2", text: "peepoRot", important: false}
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

  onDelete = (key) => {
    const { data } = this.state,
          index = data.findIndex(item => item.key === key),
          dataBefore = data.slice(0, index),
          dataAfter = data.slice(index + 1);
    
    this.setState(() => {
      return(
        {data: dataBefore.concat(dataAfter)}
      );
    })


  }

  addItem = (text) => {
    const { data } = this.state;
    let newData = data.slice();

    newData.push({
      key: data.length + 1,
      text,
      important: false,
    })

    this.setState(() => {
      return({
        data: newData,
      })
    })

  }

  render(){
    const { data } = this.state,
          importantPosts = data.filter(item => item.important).length;

    return (
      <div className="App">
        <AppHeader 
          total={data.length}
          important={importantPosts}
        />
        <div className="container">
          <PostList 
            data={data}
            onToggle={this.onToggleImportant}
            onDelete={this.onDelete}
          />
          <PostAddForm onAdd={this.addItem}/>
        </div>

      </div>
    );
  }

}

