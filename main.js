import React from "react";
import ReactDOM from "react-dom/client";

const header = () => {
  return (
    <h1>HEllo</h1>
  );
};


const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<header />)