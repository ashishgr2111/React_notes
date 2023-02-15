import React from "react";

const Hello = () => {
  // JSX
  //   return (
  //     <div className="dummyClass">
  //       <h1>Hello!!</h1>
  //     </div>
  //   );

  // JS
  return React.createElement(
    "div",
    { className: "dummyClass" },
    React.createElement("h1", null, "Hello!!")
  );
};
