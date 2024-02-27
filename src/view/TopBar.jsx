import React from "react";

export default ({ children }) => (
  <div className="top-bar">
    <h1>{children}</h1>
    <img className="logo" src="icons/logo.svg" alt="logo" />
  </div>
);
