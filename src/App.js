import React, { Component } from 'react';
import './App.css';

import WeatherDisplay from './components/WeatherDisplay';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeCity: 0,
    }
  }

  changeCity = (e) => {
    const newCity = e.target.getAttribute('cityid');
    console.log(newCity);
    this.setState({
      activeCity: newCity,
    })
  }

  render() {
    console.log('RENDERING');
    return (
      <div className="App">
        <h1>Let's display some weather!</h1>
        <div>
          {PLACES.map((v, i) => (
            <button
              key={i}
              className="btn"
              cityid={i}
              onClick={this.changeCity}
            >{v.name}</button>
          ))}
        </div>
        <WeatherDisplay key={this.state.activeCity} zip={PLACES[this.state.activeCity].zip}></WeatherDisplay>
      </div>
    );
  }

}

export default App;
