import React from "react";

import PostListItem from "../PostListItem";

import "./PostList.css";

const PostList = (props) => {
  const { data, onToggle, onDelete } = props;

  const elements = data.map(item => {
    const {key, text, important, completed } = item;
    
    return(
      <li key={key} className="postlist__item">
        <PostListItem 
          title={text} 
          important={important}
          completed={completed} 
          onToggleImportant={() => onToggle(key, "important")}
          onToggleComplete={() => onToggle(key, "completed")}
          onDelete={() => onDelete(key)}
        />
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