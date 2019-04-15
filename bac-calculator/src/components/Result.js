import React from 'react';

export const Result = (props) => {
	return (
		<div className="card d-flex align-content-between mx-sm-auto mb-5">
			<h5 className="card-header">Your Results</h5>
			<div className="card-body">
				<h5 className="card-title">
					{props.result >= 0.08 ? props.result + ' - Legally intoxicated in most states.' : props.result}
				</h5>
				<p className="card-text">{props.info}</p>
				<div className="progress">
					<div
						className={'progress-bar ' + props.levelColor}
						role="progressbar"
						style={{ width: props.level + '%' }}
						aria-valuenow={'"' + props.level + '"'}
						aria-valuemin="0"
						aria-valuemax="100"
					/>
				</div>
			</div>
		</div>
	);
};
