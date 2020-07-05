import React, { Component } from "react";
import "../style/App.css";
import Form from "./Form";
import Weather from "./Weather";

const APIKey = '';

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    country: '',
    weather: '',
    weatherDescription: '',
    weatherIcon: '',
    temp: '',
    pressure: '',
    wind: '',
    sunrise: '',
    sunset: '',
    isFilled: false,
  }

  handleInputChange = e => {
    // console.log(e.target.value)
    this.setState({
      value: e.target.value,
    })
  }

  handleCitySubmit = e => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
    
    fetch(API)
      .then(response => {
        if(response.ok) {
          console.log(API)
          return response
        }
        throw Error("Connection failed!")
      })
      .then(response => response.json())
      .then(data => {
        // const time = new Date().toLocaleString('en', {weekday: 'long'});
        const time = new Date().toLocaleString();
        this.setState({
          date: time,
          city: data.name,
          country: data.sys.country,
          weather: data.weather[0].main,
          weatherDescription: data.weather[0].description,
          weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          temp: Math.floor(data.main.temp),
          pressure: data.main.pressure,
          wind: data.wind.speed,
          sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
          sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),  
          value: '', 
          isFilled: true,
        })
      })
      .catch(err => {
        console.log(err);
      })
      
  }

  render(){
    return (
      <div className="wrapper">
          <div className="header">
            <h1 className="header__title">Weather APP</h1>
          </div>
          <div className="main">
            <Form 
            value={this.state.value}
            change={this.handleInputChange}
            submit={this.handleCitySubmit}
            />
            <Weather data={this.state}/>
          </div>
          <div className="footer">
            <p>&copy; Mateusz Hudzik</p>
          </div>
      </div>
    );
  }
}

export default App;
