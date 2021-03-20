import React from "react";

import "./PostListItem.css";

const PostListItem = (props) => {
  const { title, important, onToggle, onDelete } = props;
  
  let importanceClass = "important";
  let importanceBtnClass = "btn-important";
  if (!important) {
    importanceClass = "";
    importanceBtnClass = "";
  }

  return (
    <>
      <p className={importanceClass}>{title}</p>
      <div className="postlist__item-btns">
        <button 
          className={`btn star mr-5px ${importanceBtnClass}`}
          onClick={onToggle}
        >
          <i className="fa fa-star"></i>
        </button>
        <button 
          className="btn delete"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </>
  )
}

export default PostListItem;