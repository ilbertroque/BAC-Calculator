import React from 'react';
import { CalculationScreen } from '../components/CalculationScreen';

const data = {
	bacLevelInfo: {
		bac02:
			'No loss of coordination, slight euphoria, and loss of shyness. Relaxation, but depressant effects are not apparent.',
		bac04:
			'Feeling of well-being, relaxation, lower inhibitions, and sensation of warmth. Euphoria. Some minor impairment of judgment and memory, lowering of caution.',
		bac06:
			'Slight impairment of balance, speech, vision, reaction time, and hearing. Euphoria. Reduced judgment and self-control. Impaired reasoning and memory.',
		bac10:
			'Significant impairment of motor coordination and loss of good judgment. Speech may be slurred; balance, peripheral vision, reaction time, and hearing will be impaired.',
		bac13:
			'Gross motor impairment and lack of physical control. Blurred vision and major loss of balance. Euphoria is reducing and beginning dysphoria (a state of feeling unwell)',
		bac16: 'Dysphoria predominates, nausea may appear. The drinker has the appearance of a sloppy drunk.',
		bac20:
			'Needs assistance in walking; total mental confusion. Dysphoria with nausea and vomiting; possible blackout.',
		bac24: 'Alcohol poisoning. Loss of consciousness.',
		bac40: 'Onset of coma, possible death due to respiratory arrest.'
	}
};

export class CalculationScreenContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: 'male',
			weight: 100,
			time: 0,
			beer: 0,
			wine: 0,
			liquor: 0,
			bac: 0,
			levelColor: 'bg-success',
			level: 0,
			info: 'Sober!'
		};

		this.handleGender = this.handleGender.bind(this);
		this.handleWeight = this.handleWeight.bind(this);
		this.handleTime = this.handleTime.bind(this);
		this.handleBeer = this.handleBeer.bind(this);
		this.handleWine = this.handleWine.bind(this);
		this.handleLiquor = this.handleLiquor.bind(this);
		this.bacCalc = this.bacCalc.bind(this);
		this.deliverInfo = this.deliverInfo.bind(this);
	}

	handleGender(e) {
		if (e.target.value === 'M') {
			this.setState({ gender: 'male' }, this.bacCalc);
		} else if (e.target.value === 'F') {
			this.setState({ gender: 'female' }, this.bacCalc);
		}
	}
	handleWeight(e) {
		if (e.target.value === '+') {
			this.setState({ weight: this.state.weight + 10 }, this.bacCalc);
		} else if (e.target.value === '-' && this.state.weight > 0) {
			this.setState({ weight: this.state.weight - 10 }, this.bacCalc);
		}
	}
	handleTime(e) {
		if (e.target.value === '+') {
			this.setState({ time: this.state.time + 1 }, this.bacCalc);
		} else if (e.target.value === '-' && this.state.time > 0) {
			this.setState({ time: this.state.time - 1 }, this.bacCalc);
		}
	}
	handleBeer(e) {
		if (e.target.value === '+') {
			this.setState({ beer: this.state.beer + 1 }, this.bacCalc);
		} else if (e.target.value === '-' && this.state.beer > 0) {
			this.setState({ beer: this.state.beer - 1 }, this.bacCalc);
		}
	}
	handleWine(e) {
		if (e.target.value === '+') {
			this.setState({ wine: this.state.wine + 1 }, this.bacCalc);
		} else if (e.target.value === '-' && this.state.wine > 0) {
			this.setState({ wine: this.state.wine - 1 }, this.bacCalc);
		}
	}
	handleLiquor(e) {
		if (e.target.value === '+') {
			this.setState({ liquor: this.state.liquor + 1 }, this.bacCalc);
		} else if (e.target.value === '-' && this.state.liquor > 0) {
			this.setState({ liquor: this.state.liquor - 1 }, this.bacCalc);
		}
	}

	bacCalc() {
		var gender = this.state.gender;
		var weight = this.state.weight;
		var time = this.state.time;
		var beers = this.state.beer;
		var wine = this.state.wine;
		var liquor = this.state.liquor;

		var genderCoe;
		var bodyCalc;
		var alcoholDose;
		var alcoholPerGram;
		var result;

		if (gender === 'male') {
			genderCoe = 0.68;
		} else if (gender === 'female') {
			genderCoe = 0.55;
		}

		//Equations

		alcoholDose = (beers + wine + liquor) * 14;
		bodyCalc = weight * 454 * genderCoe;
		alcoholPerGram = alcoholDose / bodyCalc * 100;

		result = (alcoholPerGram - time * 0.015).toFixed(3);

		var percentage = result / 0.45 * 100;

		var style = 'bg-success';

		if (percentage >= 0 && percentage <= 25) {
			style = 'bg-success';
		} else if (percentage >= 26 && percentage <= 50) {
			style = 'bg-warning';
		} else if (percentage >= 51) {
			style = 'bg-danger';
		}

		this.deliverInfo(result);

		this.setState({
			bac: result,
			level: percentage,
			levelColor: style
		});
	}

	deliverInfo(result) {
		var bac = result;
		if (bac <= 0) {
			this.setState({
				info: 'Sober!'
			});
		} else if (bac > 0 && bac <= 0.02) {
			this.setState({
				info: data.bacLevelInfo.bac02
			});
		} else if (bac > 0.02 && bac <= 0.04) {
			this.setState({
				info: data.bacLevelInfo.bac04
			});
		} else if (bac > 0.04 && bac <= 0.06) {
			this.setState({
				info: data.bacLevelInfo.bac06
			});
		} else if (bac > 0.06 && bac <= 0.1) {
			this.setState({
				info: data.bacLevelInfo.bac10
			});
		} else if (bac > 0.1 && bac <= 0.13) {
			this.setState({
				info: data.bacLevelInfo.bac13
			});
		} else if (bac > 0.13 && bac <= 0.16) {
			this.setState({
				info: data.bacLevelInfo.bac16
			});
		} else if (bac > 0.16 && bac <= 0.2) {
			this.setState({
				info: data.bacLevelInfo.bac20
			});
		} else if (bac > 0.2 && bac <= 0.24) {
			this.setState({
				info: data.bacLevelInfo.bac24
			});
		} else if (bac > 0.24 && bac >= 0.4) {
			this.setState({
				info: data.bacLevelInfo.bac40
			});
		}
	}

	render() {
		return (
			<CalculationScreen
				genderHandler={this.handleGender}
				weightCount={this.state.weight}
				weightHandler={this.handleWeight}
				timeCount={this.state.time}
				timeHandler={this.handleTime}
				beerCount={this.state.beer}
				beerHandler={this.handleBeer}
				wineCount={this.state.wine}
				wineHandler={this.handleWine}
				liquorCount={this.state.liquor}
				liquorHandler={this.handleLiquor}
				bac={this.state.bac < 0 ? 0 : this.state.bac}
				bacInfo={this.state.info}
				levelColor={this.state.levelColor}
				level={this.state.level}
			/>
		);
	}
}
