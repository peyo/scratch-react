import React from "react";
import { Link } from "react-router-dom"; 

class Active extends React.Component {
  render() {
    return (
      <section className="active">
        <div className="lay-hee-who">
          Lay Hee Who!
        </div>
        <Link to="/active/users">
          Users, click here.
        </Link>
      </section>
    );
  }
}

export default Active;