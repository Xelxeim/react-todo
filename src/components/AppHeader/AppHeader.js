import React from "react";

import "./AppHeader.css";

const AppHeader = (props) => {
  const { total, important } = props;
  
  return (
    <header>
      <h1>Привет, FirstName LastName!</h1>
      <h2>Всего записей - {total}, из них {important} важные</h2>
    </header>
  );
}

export default AppHeader;