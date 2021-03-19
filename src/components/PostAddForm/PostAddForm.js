import React from "react";

import "./PostAddForm.css";

const PostAddForm = () => {
  return (
    <div className="postadder mt-2rem">
      <input placeholder="Введите дело" className="postadder__input">
        
      </input>
      <button className="btn submit">
        Добавить
      </button>
    </div>
  )
}

export default PostAddForm;