import React from "react";

import "./PostListItem.css";

const PostListItem = (props) => {
  const { title, important, completed, onToggleImportant, onToggleComplete, onDelete } = props;
  
  const possibleClasses = {
    importantClass: "important",
    importantBtnClass: "btn-important",
    completedClass: "complete",
    completedBtnClass: "btn-complete",
  };

  function checkClass(param, boolParam){
    const keys = [`${param}Class`, `${param}BtnClass`];
    if (!boolParam){
       keys.forEach(item => {
         possibleClasses[item] = "";
       })
    }
  }

  checkClass("important", important);
  checkClass("completed", completed);

  const { importantClass, importantBtnClass, completedClass, completedBtnClass } = possibleClasses;

  return (
    <>
      <p className={`${importantClass} ${completedClass}`}>{title}</p>
      <div className="postlist__item-btn-group">
        <button 
          className={`btn star mr-5px ${importantBtnClass}`}
          onClick={onToggleImportant}
        >
          <i className="fa fa-star"></i>
        </button>

        <button 
          className={`btn complete mr-5px ${completedBtnClass}`}
          onClick={onToggleComplete}
        >
          <i className="fa fa-check-square"></i>
        </button>

        <button 
          className="btn delete mr-5px"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </>
  )
}

export default PostListItem;