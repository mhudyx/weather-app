import React from 'react'

const Weather = props => {

    const {date, city, country, weather, weatherDescription, weatherIcon, temp, pressure, wind, sunrise, sunset, isFilled} = props.data;

    return(
        <>
        {isFilled ? 
        <div className="weather">
            <h1 className="weather__city-title">{city}, {country}</h1>
            <h2 className="weather__date">{date}</h2>
            <div className="weather__wrapper">
                 <img src={weatherIcon} alt="icon"/>
                 <p className="weather__temp">{temp}<span>&#176;C</span></p>
            </div>
            <div className="weather__values">
                <p className="weather__value">Pressure: {pressure} hPa</p>
                <p className="weather__value">Wind: {wind} m/s</p>
                <p className="weather__value">Sunrise: {sunrise}</p>
                <p className="weather__value">Sunset: {sunset}</p>
            </div>
        </div>
        : ''
        }
        </>
        
       
    );
}

export default Weather;