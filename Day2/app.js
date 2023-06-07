
/**
 * PARCER : 
 * HMR - HOT MODULE REPLACEMENT
 * File Watcher Algo - C++ ( checks the changes in files)
 * Bundler / minify
 * cleaning code
 * image optimization
 * caching while development
 * HTTPS on dev
 * consistent hashing algos
 */


import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    className: "newClass",
  },
  "first react app"
);
const heading2 = React.createElement(
  "h1",
  {
    className: "newClass",
  },
  "Hello world"
);

const main = React.createElement(
  "h1",
  {
    className: "hehe",
  },
  [heading, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(main);
