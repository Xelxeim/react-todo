import React from "react";

import PostListItem from "../PostListItem";

import "./PostList.css";

const PostList = (props) => {
  const { elements } = props;
  elements.map(item => {
    // {  } = item
    return(
      <PostListItem />
    )
  })
  return (
    <ul>
      {elements}
    </ul>
  )
}

export default PostList;