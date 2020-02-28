import React from 'react';
import './AppButton.css';
import Button from "./Button";

class AppButton extends React.Component {
  state = {
    count: 0
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <section className="main">
        <Button
          increaseCount={(event) => this.increaseCount(event)}
        />
        <div className="counter">
          {this.state.count}
        </div>
      </section>
    )
  }
}

export default AppButton;