import React from "react";
import { Link } from "react-router-dom";

class Users extends React.Component {
  render() {
    return (
      <section className="users">
        <div className="yodel">
          Hello User.<br /><br />Yodel!<br /><br />
        </div>
        <Link
          className="links"
          to="/users/active"
        >
          Active Users, click here.
        </Link>
      </section>
    );
  }
}

export default Users;