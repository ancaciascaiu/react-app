import React from 'react'

class Home extends React.Component {
	state = {cities: []}

	constructor(){
		super()
		this.state = {
			cities: []
		}
	}

	async componentDidMount(){
		console.log('running componentDidMount')

		const results = await fetch('https://cl-react.herokuapp.com/cities')
		const cities = await results.json()

		this.setState({cities: cities})
	}

	render(){
		return(
			<div>
				{this.state.cities.map( city => {
					return <div key={city.name}> city is {city.name}</div>
				})}

			</div>
			)
	}
}


export default Home