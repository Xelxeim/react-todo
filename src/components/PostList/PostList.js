import React from "react";

import PostListItem from "../PostListItem";

import "./PostList.css";

const PostList = (props) => {
  
  const { data, onToggle } = props;
  const elements = data.map(item => {
    const {key, text, important } = item;
    return(
      <li key={key} className="postlist__item">
        <PostListItem 
          title={text} 
          important={important} 
          onToggle={() => onToggle(key, important)}/>
      </li>
    )
  });
  
  return (
    <ul className="postlist">
      {elements}
    </ul>
  )
}

export default PostList;