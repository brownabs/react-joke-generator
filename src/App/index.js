import React from 'react';
import './App.scss';
import jokeData from '../helpers/data/jokeData';
import SetUp from '../components/SetUp';

class App extends React.Component {
  state = { jokes: [] }

  componentDidMount() {
    jokeData.getJokes().then((response) => {
      this.setState({
        jokes: response,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="joke-header">Joke Generator</h1>
        <SetUp/>
      </div>
    );
  }
}
export default App;
