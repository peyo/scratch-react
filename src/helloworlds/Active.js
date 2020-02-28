import React from "react";
import { withRouter } from "react-router-dom";

class Active extends React.Component {
  handleClick() {
    this.props.history.push("/users");
  }

  render() {
    return (
      <section className="active">
        <div className="lay-hee-who">
          Hello Active User.<br /><br />Lay Hee Who!
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

export default withRouter(Active);