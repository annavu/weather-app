import React, { Component } from 'react';

class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        {this.props.icon && <img src={this.props.icon} alt=""/>}
        {this.props.city && <p className="weather__city">{this.props.city}, {this.props.country}</p> }
        {this.props.temperature && <p>Tempareture: {this.props.temperature}</p> }
        {this.props.humidity && <p>Humidity:  {this.props.humidity}</p> }
        {this.props.description && <p>Conditions: {this.props.description}</p> }
        {this.props.sunrise && <p>Sunrise/Sunset: {this.props.sunrise}/{this.props.sunset} (Central European Time)</p> }
        {this.props.error && <p className="weather__alert">{this.props.error}</p> }
      </div>
    );
  }
};

export default Weather;