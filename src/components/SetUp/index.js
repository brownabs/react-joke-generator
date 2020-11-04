import React, { Component } from 'react';
import jokeData from '../../helpers/data/jokeData';
import PunchLine from '../PunchLine';

export default class SetUp extends Component {
  state = {
    jokes: [],
    showComponent: false,
  };

  componentDidMount() {
    jokeData.getJokes().then((response) => {
      this.setState({
        jokes: response,
      });
    });
  }

  refreshJokes = () => {
    jokeData.getJokes().then((response) => {
      this.setState({
        jokes: response,
      });
    });
  }

  render() {
    const { jokes } = this.state;
    const renderPunchlineToDom = () => {
      this.setState({
        showPunchline: true,
      });
    };
    return (
      <div className="joke-setup">
        <h2>{jokes.setup}</h2>
      <div>
      {!this.state.showPunchline ? <button onClick={renderPunchlineToDom}>Get Punchline</button> : <button onClick={this.refreshJokes()}>Get Another Joke</button>
        }
        {this.state.showPunchline ? <PunchLine key={jokes.id} joke={jokes}/> : null
        }
      </div>
      </div>);
  }
}