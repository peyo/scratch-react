import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Active from "./Active";
import Users from "./Users";
import Admins from "./Admins";
import "./AppWorlds.css";

class AppWorlds extends React.Component {
  render() {
    return (
      <section className="main">
        <main>
          <Switch>
            <Route
              exact path="/"
              component={Home}
            />
            <Route
              path="/users/active"
              component={Active}
            />
            <Route
              exact path="/users"
              component={Users}
            />
          </Switch>
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