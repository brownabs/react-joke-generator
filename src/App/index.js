import React from 'react';
import GoatCorral from '../components/GoatCorral';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="site-header">Goat Yoga</h1>
        < GoatCorral />
      </div>
    );
  }
}

export default App;
