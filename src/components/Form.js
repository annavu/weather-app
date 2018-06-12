import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <form className="form__content" onSubmit={this.props.getWeather}>
          <input type="text" className="input" name="city" placeholder="City.." autoComplete="off"/>  
          <button className="btn">Get Weather</button>
        </form>
      </div>
    );
  }
};


export default Form;