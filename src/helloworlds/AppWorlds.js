import React from "react";
import { Route } from "react-router-dom";
import Active from "./Active";
import Users from "./Users";
import Admins from "./Admins";
import "./AppWorlds.css";

class AppWorlds extends React.Component {
  render() {
    return (
      <section className="main">
        <main>
          <Route
            exact path="/active"
            component={Active}
          />
          <Route
            path="/active/users"
            component={Users}
          />
          <Route
            path="/admins"
            component={Admins}
          />
        </main>
      </section>
    );
  }
}

export default AppWorlds;