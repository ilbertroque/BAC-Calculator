import React from 'react';

export const Gender = (props) => {
	return (
		<div className="card mx-auto mb-5" style={{ minWidth: 18 + 'rem', maxWidth: 45 + 'rem' }}>
			<div className="card-body">
				<h5 className="text-center card-title">{props.title}</h5>
				<div className="d-flex justify-content-between">
					<button value="M" onClick={props.onClick} className="px-5 btn btn-light">
						M
					</button>
					<button value="F" onClick={props.onClick} className="px-5 btn btn-light">
						F
					</button>
				</div>
			</div>
		</div>
	);
};
