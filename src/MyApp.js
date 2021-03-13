import React from "react";

import Welcome from "./Welcome";
import "./App.css";

function MyApp() {
  // const message = <h2>Custom Message</h2>;

  // const nativeReactElement = React.createElement(
  //   "h3",
  //   null,
  //   "Native react element"
  // );

  return (
    <div className="App">
      <Welcome message="My Demo Component" color="red" />
      <Welcome message="Custom Component" color="green" />
      {/* <h1>Hello react</h1>
      <h2>Custom Message</h2>
      <h3>Native react element</h3> */}
    </div>
  );
}

export default MyApp;
