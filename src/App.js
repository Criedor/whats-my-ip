import React from 'react';
import './App.css';
import MyMap from "./MyMap"

class App extends React.Component {
  constructor(props) {
    super(props);
      // this.state = {IP: "95.90.254.10", city: "Lambrechtshagen", region: "Mecklenburg-Vorpommern", country: "DE", lat:"54.1021", lng: "12.0164" };
      this.state = {IP: "", city: "", region: "", country: "", lat:"", lng: "" };
  }

getIP() { 
  fetch("https://geo.ipify.org/api/v1?apiKey=at_RZgqfIVVenVQTzIL1IkcW5RmkBkhu")
    .then(response => response.json())
    .then(result => this.setState({IP: result.ip, country: result.location.country, city: result.location.city, region: result.location.region, lat: result.location.lat, lng: result.location.lng}))
    .then( () =>  fetch(`https://restcountries.eu/rest/v2/alpha/${this.state.country}`)
          .then( response => response.json())
          .then(result2 => this.setState({img: result2.flag, timezone: result2.timezones[0], countryname: result2.name, capital: result2.capital, population: result2.population}))
          .catch(error => console.log('error', error.message)))
    .catch(error => console.log('error', error.message)) 
}
 


  render (){
    return (
      <div className="App">
      <button className="button" onClick={() =>this.getIP()}>get IP</button>
      <div className="ip">{this.state.IP ? <p>My IP is: {this.state.IP}</p> : ""}</div>
      <div className="location">{this.state.city ? <p>My Location:<br/>Your are currently in {this.state.city}, {this.state.region}, {this.state.country}</p> : ""}</div>
      <div className="countryflag">{this.state.img ? <img src={this.state.img} alt="" /> :""}</div>
      <div className="country">{this.state.countryname ? <p>{this.state.countryname}`s capital is {this.state.capital}, the population is {this.state.population}.</p> :"" }</div>
      <MyMap position={[this.state.lat, this.state.lng]} zoom={10}/>
      </div>
    );
  }
}

export default App;
