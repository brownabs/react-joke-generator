import React, { Component } from 'react';
import goatData from '../../helpers/data/goatData';
import Goat from '../Goat';

class GoatCorral extends Component {
  state = { goats: [] };

  componentDidMount() {
    goatData.getGoats().then((response) => {
      this.setState({
        goats: response,
      });
    });
  }

  removeGoat = (e) => {
    const removeGoat = this.state.goats.filter((goat) => goat.id !== e.target.id);
    this.setState({
      goats: removeGoat,
    });
  }

  render() {
    const { goats } = this.state;
    const renderGoatToDom = () => goats.map((goat) => <Goat key={goat.id} goat={goat} removeGoat={this.removeGoat}/>);

    return (
      <div className="goat-corral">
        {renderGoatToDom()}
      </div>);
  }
}

export default GoatCorral;
