import React from "react";
import { withRouter } from "react-router-dom";

class Admins extends React.Component {
  handleClick() {
    this.props.history.push("/");
  }

  render() {
    return (
      <section className="admins">
        <div className="yodel-lay-hee-who">
          Hello Admin.<br /><br />Yodel lay hee who!
        </div>
        <br />
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

export default withRouter(Admins);