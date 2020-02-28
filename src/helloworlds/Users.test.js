import React from "react";
import ReactDOM from "react-dom";
import Users from "./Users";
import { BrowserRouter } from "react-router-dom";

describe("Users component", () => {
  it("Renders without crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Users />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});