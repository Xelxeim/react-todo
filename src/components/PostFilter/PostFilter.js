import React from "react";

import "./PostFilter.css";

const PostFilter = (props) => {
  const buttons = [
    {key: "fasw", label: "All"},
    {key: "sdaq", label: "Important"}
  ],
  { onFilter, filter } = props,
  elements = buttons.map(
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
  })
  return (
    <div className="btn-group">
      {elements}
    </div>
  )
}

export default PostFilter;