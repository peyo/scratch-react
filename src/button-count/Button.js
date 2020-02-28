import React from "react";

class Button extends React.Component {
  render() {
    return (
      <section className="button">
        <button
          onClick={(event) => this.props.increaseCount(event)}>
          Click Me!
        </button>
      </section>
    )
  }
}

export default Button