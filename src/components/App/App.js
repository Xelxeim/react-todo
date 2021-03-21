import React, { Component } from "react";

import './App.css';

import AppHeader from "../AppHeader";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";
import PostFilter from "../PostFilter";
import SearchPanel from "../SearchPanel";

export default class App extends Component {

  state = {
    data: [
      {key: "0", text: "MonkaS", important: false, completed: false}, 
      {key: "1", text: "MonkaGIGA", important: false, completed: false},
      {key: "2", text: "peepoRot", important: false, completed: false}
    ],
    filterPattern: "",
    currentFilter: "All"
  }

  onToggleParam = (id, param) => {
    this.setState(({ data }) => {
      const index = data.findIndex(item => item.key === id),
            elem = data[index],
            modifiedElem = {...elem, [param]: !elem[param]},
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

  onSearch = (filterPattern) => {
    this.setState(() => {
      return {filterPattern}
    })
  }

  searchPosts = (data, pattern) => {
    if(!pattern.length) return data;
    const filteredPosts = data.filter(item => item.text.indexOf(pattern) > -1);

    return filteredPosts;
  }

  onFilter = (btn) => {
    this.setState(() => {
      return {currentFilter: btn}
    });
  }

  filterPosts = (data) => {
    const { currentFilter } = this.state;
    let visiblePosts;
    switch(currentFilter){
      case "All":
        visiblePosts = data;
        break; 

      case "Important":
        visiblePosts = data.filter(item => item.important);
        break;

      case "Completed":
        visiblePosts = data.filter(item => item.completed);
        break;

      default:
        break;
    }
    
    return visiblePosts;
  }

  render(){
    const { data, currentFilter, filterPattern } = this.state,
          importantPosts = data.filter(item => item.important).length,
          completedPosts = data.filter(item => item.completed).length,
          visiblePosts = this.filterPosts(this.searchPosts(data, filterPattern));

    return (
      <div className="App">
        <AppHeader 
          total={data.length}
          important={importantPosts}
          completed={completedPosts}
        />
        <div className="container">
          <div className="search-panel">
            <SearchPanel onSearch={this.onSearch} />
            <PostFilter 
              filter={currentFilter}
              onFilter={this.onFilter} 
            />
          </div>        
          <PostList 
            data={visiblePosts}
            onToggle={this.onToggleParam}
            onDelete={this.onDelete}
          />
          <PostAddForm onAdd={this.addItem}/>
        </div>
      </div>
    );
  }

}

