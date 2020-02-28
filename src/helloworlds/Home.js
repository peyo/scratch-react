import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div className="welcome">
          Welcome!
        </div>
        <div className="questions">
          Are you a User?<br />
          <Link
            className="links"
            to="/users"
          >
            Users, click here.
          </Link>
        </div>
        <div className="questions">
          Are you an Admin?<br />
          <Link
            className="links"
            to="/admins"
          >
            Admins, click here.
          </Link>
        </div>
      </section>
    );
  }
}

export default Home;