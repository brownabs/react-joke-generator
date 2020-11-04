import React, { Component } from 'react';

class PunchLine extends Component {
  render() {
    const { joke } = this.props;
    return (
      <div className="Joke" id={joke.id}>
      <h5>{joke.punchline}</h5>
      </div>
    );
  }
}

export default PunchLine;
