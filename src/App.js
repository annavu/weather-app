import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';

const key = '641ec68f4a3afe00e2783b32b4196e4c';

class App extends React.Component {

  state = {
    icon: undefined,
    temperature: undefined,
    sunrise: undefined,
    sunset: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    const data = await apiCall.json();
    // const currentTimeZoneOffsetInHours = sunrise.getTimezoneOffset() / 60


    if(city) {
      const sunrise = new Date(1000*data.sys.sunrise);
      const sunset = new Date(1000*data.sys.sunset);
      const hoursSunrise = sunrise.getHours();
      const hoursSunset = sunset.getHours();
      const minutesSunrise = "0" + sunrise.getMinutes();
      const minutesSunset = "0" + sunset.getMinutes();
      const sunriseTime = hoursSunrise + ':' + minutesSunrise.substr(-2);
      const sunsetTime = hoursSunset + ':' + minutesSunset.substr(-2);
      // console.log(data);
      // console.log(sunrise);
      // console.log(currentTimeZoneOffsetInHours);

      this.setState({
        icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        temperature: data.main.temp,
        sunrise: sunriseTime,
        sunset: sunsetTime,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
      } else {
        this.setState({
          icon: undefined,
          temperature: undefined,
          sunrise: undefined,
          sunset: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the city"
        })
      }
    }

  render() {
    return (
      <div className="wrapper">
        <div className="showcase">
          <Header/>
          <div className="info">
            <Form getWeather={this.getWeather}/>
            <Weather 
              icon = {this.state.icon}
              temperature = {this.state.temperature}
              sunrise = {this.state.sunrise}
              sunset = {this.state.sunset}
              city = {this.state.city}
              country = {this.state.country}
              humidity = {this.state.humidity}
              description = {this.state.description}
              error = {this.state.error}/>
          </div>
        </div>
      </div>
    );
  }
};

export default App;