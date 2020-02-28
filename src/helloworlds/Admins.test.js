import React from "react";
import ReactDOM from "react-dom";
import Admins from "./Admins";

describe("Admins component", () => {
  it("Renders without crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Admins />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});