import React from 'react';

export class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar navbar-light bg-none justify-content-between">
				<a className="navbar-brand">BAC Calculator</a>
				<div>
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
						Calculate
					</button>
				</div>
			</div>
		);
	}
}
