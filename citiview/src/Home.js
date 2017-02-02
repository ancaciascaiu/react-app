import React, { Component } from 'react';
import City from './City'

class Home extends Component {
  state = {cities: []}

  async componentDidMount() {
    const response = await fetch('https://cl-react.herokuapp.com/cities')
    const cities   = await response.json()

    this.setState({cities: cities})
  }

  childHighlighted = ()=> {
  	console.log("called from child")
  }

  render() {
    return (
      <div>
        <h3>You highlighted --- </h3>

        {this.state.cities.map( city => {
          return <City 
          	key={city.name} 
          	name={city.name} 
          	population={city.population} 
          	onHighlight={this.childHighlighted}
          	/>
        })}
      </div>
    );
  }
}

export default Home;