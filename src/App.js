import React from 'react';
import "./App.scss";
import qlogo from './qsearchLogo-01.svg';
class App extends React.Component {
	constructor(props) {
		super(props);
		
		const currentYear = (new Date()).getFullYear();
		
		this.state = {
			currentYear
		};
	}
	
	render() {
		return (
			<div>				
				<div className="flex-align-center-justify-center-direction-column view-height p-all">
					<img className="foresight-logo m-bottom" alt="Qsearch" src={qlogo} />
					<div className="foresight-search-bar fill-space m-bottom">
						<input type="text" placeholder="Search the world now..." />
						<i className="material-icons">search</i>
					</div>
					<div className="m-bottom">
						<button className="btn primary m-right">Search</button>
						<button className="btn dark-grey">Browse Zed News</button>
					</div>
					<div className="text-center text-grey font-lighter">
						<div><small>&copy; Qsearch incopertated, {this.state.currentYear}</small></div>
						<div><small>All rights reserved.</small></div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default App;