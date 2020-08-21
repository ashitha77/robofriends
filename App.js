import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots : robots,
			searchfield : ''
		}
	}

	onSearchChange = (event) => {
		let e=event.target.value;
		this.setState({ searchfield : e })
	}


	render() {

		const filterRobot = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		}

			)

		return(
		<div className="tc">
			<h1>ROBOFRIENDS</h1>
			<SearchBox searchChange={() => this.onSearchChange} />
			<Scroll>
			<CardList robots={filterRobot}/>
			</Scroll>
		</div>
		);
		}

}

export default App;