import React, { Component } from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class Goat extends Component {
  static propTypes = {
    goat: goatShape,
    removeGoat: PropTypes.func,
  }

  state = {
    isBusy: this.props.goat.isBusy,
  };

  updateGoat = () => {
    this.setState({
      isBusy: !this.state.isBusy,
    });
  }

  render() {
    const { goat, removeGoat } = this.props;
    const { isBusy } = this.state;
    return (
      <div className="Goat col-3" id={goat.id}>
        <div className="card">
          <img src={goat.imgUrl} className="card-img-top" alt={goat.name} />
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">{goat.age} Years old</p>
            <p className="card-text">{goat.description}</p>
          </div>
          <div className="card-footer">
              { isBusy ? (
                <button className="btn btn-danger" onClick={this.updateGoat}>Busy</button>
              ) : (
                <button className="btn btn-success" onClick={this.updateGoat}>Not Busy</button>)
              }
              <button className="btn btn-danger" id={goat.id} onClick={(e) => removeGoat(e)}>Remove Goat</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;