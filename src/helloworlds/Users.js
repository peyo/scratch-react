import React from "react";
import { Link, withRouter } from "react-router-dom";

class Users extends React.Component {
  handleClick() {
    this.props.history.push("/");
  }

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
        <br /><br />
        <button
          type="button"
          onClick={() => this.handleClick()}
        >
          Go back
        </button>
      </section>
    );
  }
}

export default withRouter(Users);