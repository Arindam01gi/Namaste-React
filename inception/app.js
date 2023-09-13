/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>This is a h1 tag</h1>
 *      </div>
 *      <div id="child2">
 *          <h1>This is a h1 tag</h1>
 *      </div>
 * </div>
 *
 *
 * I have to create this structure using React.createElement
 */

const heading = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "This is a h1 Tag!")
  ),React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "This is a h1 Tag!")
  )]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
