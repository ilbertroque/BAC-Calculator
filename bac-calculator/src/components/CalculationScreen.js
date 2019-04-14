import React from 'react';
import { Gender } from './Gender';
import { Counter } from './Counter';
import { Result } from './Result';

export const CalculationScreen = (props) => {
	return (
		<div>
			<Gender title="Gender" onClick={props.genderHandler} />
			<Counter title="Weight (lbs)" count={props.weightCount} onClick={props.weightHandler} />
			<Counter title="Time (hrs)" count={props.timeCount} onClick={props.timeHandler} />
			<Counter title="Beers" count={props.beerCount} onClick={props.beerHandler} />
			<Counter title="Wine" count={props.wineCount} onClick={props.wineHandler} />
			<Counter title="Liquor" count={props.liquorCount} onClick={props.liquorHandler} />
			<Result result={props.bac} info={props.bacInfo} levelColor={props.levelColor} level={props.level} />
		</div>
	);
};
