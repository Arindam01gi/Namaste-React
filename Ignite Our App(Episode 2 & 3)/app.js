import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 className="heading">Namaste React Using JSX</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1 id="heading">Namaste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
