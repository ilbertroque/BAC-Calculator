import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/App.css';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { CalculationScreenContainer } from './containers/CalculationScreenContainer';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Navbar />
				<Intro />
				<CalculationScreenContainer />
			</div>
		);
	}
}

export default App;
