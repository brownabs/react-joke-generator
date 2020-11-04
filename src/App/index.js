import React from 'react';
import './App.scss';
import jokeData from '../helpers/data/jokeData';
import SetUp from '../components/SetUp';
import Image from './reactJs.png';

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
        <img src={Image} className="joke-generator-logo" alt="logo"/>
        <SetUp/>
      </div>
    );
  }
}
export default App;
