import React from "react";
import ReactDOM from "react-dom";
import Active from "./Active";
import { BrowserRouter } from "react-router-dom";

describe("Active component", () => {
  it("Renders without crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Active />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});