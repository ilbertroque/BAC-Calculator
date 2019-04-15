import React from 'react';

export const Counter = (props) => {
	return (
		<div className="card mx-auto mw-25 mb-5" style={{ minWidth: 18 + 'rem', maxWidth: 45 + 'rem' }}>
			<div className="card-body">
				<h5 className="card-title text-center">{props.title}</h5>
				<div className="d-flex justify-content-between">
					<button value="-" onClick={props.onClick} className="px-4 btn btn-light">
						-
					</button>
					<h5>{props.count}</h5>
					<button value="+" onClick={props.onClick} className="px-4 btn btn-light">
						+
					</button>
				</div>
			</div>
		</div>
	);
};
