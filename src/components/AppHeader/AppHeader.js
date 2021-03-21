import React from "react";

import "./AppHeader.css";

const AppHeader = (props) => {
  const { total, important, completed } = props;
  
  return (
    <header className="header">
      <h1>Привет, User!</h1>
      <div className="header__info">
        <h2>Всего задач - {total}</h2>
        <h2>Важных задач - {important}</h2>
        <h2>Выполнено задач - {completed}</h2>
      </div>
    </header>
  );
}

export default AppHeader;