import React from "react";

import "./PostFilter.css";

const PostFilter = (props) => {
  const buttons = [
    {key: "fasw", label: "All"},
    {key: "sdaq", label: "Important"},
    {key: "osao", label: "Completed"}
  ];
  const { onFilter, filter } = props;
  
  const elements = buttons.map(
    item => {
      let activeClass;

      if (item.label === filter){
        activeClass = true;
      }

      return(
        <button
          key={item.key}
          className={`btn btn-filter ${activeClass ? "active" : ""}`}
          onClick={() => onFilter(item.label)}
        >
          {item.label}
        </button>)
    }
  )
  
  return (
    <div className="btn-group">
      {elements}
    </div>
  )
}

export default PostFilter;