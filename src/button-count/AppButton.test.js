import React from "react";
import ReactDOM from "react-dom";
import AppButton from "./AppButton";

describe.skip("AppButton component", () => {
  it("Renders without crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});