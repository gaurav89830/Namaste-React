/**
 *
 * Everything in react is a component
 *
 * React Component
 * Functional - New way
 * Class based component - Old way
 *
 *
 * Let's learn functional component first.
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

// jsx

const root = ReactDOM.createRoot(document.getElementById("root"));

// Functional Component

const HeaderComponent = () => {
  return (
    <div>
      <h1>Namaste React functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};
const HeaderComponent2 = () => (
  <div>
    <h1>Namaste React functional component</h1>
    <h2>This is a h2 tag</h2>
  </div>
);
const HeaderComponent3 = function () {
  return (
    <div>
      <h1>Namaste React functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};
root.render(<HeaderComponent3/>)
// //-------------Render---------

// const funcComponent = () => (
//   <div>
//     <h1>Namaste React functional component</h1>
//     <h2>This is a h2 tag</h2>
//   </div>
// );
// root.render(<funcComponent />);

// const reactcomponent = <h1>this is a react component</h1>;

// root.render(reactcomponent);
