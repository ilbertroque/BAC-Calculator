import React from 'react';

export class Intro extends React.Component {
	render() {
		return (
			<div className="jumbotron text-center bg-white">
				<h1 className="display-4 mt-5">Stay safe, Calculate your BAC</h1>
				<p className="lead">
					A simple, yet convenient tool that calculates your BAC (Blood Alcohol Concentration). Use it to
					check 'drunk' state, or even to preview a safe amount of drinking before going out.
				</p>
				<hr className="my-4" />
				<p>
					This app provides a rough BAC aproximation using approved global equations based on gender, weight,
					and time elapsed.
				</p>
				<p className="lead">
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Learn more
					</a>
				</p>
			</div>
		);
	}
}
