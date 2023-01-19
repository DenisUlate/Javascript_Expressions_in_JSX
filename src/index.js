//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

let currentYear = new Date().getFullYear();
let copyrightNotice = `Copyright \u00A9 ${currentYear} Denis Ulate`;

ReactDOM.render(
  <div>
    <h1>Javascript Expressions in JSX</h1>
    <p>Created by Denis</p>
    <p>{copyrightNotice}</p>
  </div>,
  document.getElementById("root")
);
