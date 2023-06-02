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
