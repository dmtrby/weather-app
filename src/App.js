import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import WeatherDisplay from './components/WeatherDisplay';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class App extends Component {

  state = {
    active: this.props.activeCity,
  }

  submitChange = (i) => {
    console.log(i);
    this.setState({ active: i })
    this.props.changeCity(i);
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>Let's display some weather!</h1>
        <div>
          {PLACES.map((v, i) => (
            <button
              key={i}
              className="btn"
              cityid={i}
              onClick={this.submitChange.bind(this, i)}
            >{v.name}</button>
          ))}
        </div>
        <WeatherDisplay key={this.props.activeCity} zip={PLACES[this.props.activeCity].zip}></WeatherDisplay>
      </div>
    );
  }

}

App.propTypes = {
  changeCity: PropTypes.func.isRequired,
  activeCity: PropTypes.number.isRequired,
}

export default App;
