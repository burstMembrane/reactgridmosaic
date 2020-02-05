import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {term: props.placeholder};
		// BIND!!
		// this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		// pass search term to parent app component
		this.props.onSubmit(this.state.term);
	};

	onFieldFocus() {
		this.setState({term: ''});
	}
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form" action="">
					<div className="field">
						<h1 className="ui header " htmlFor="search">
							{this.props.label}
						</h1>

						<div className="ui action input focus ">
							<input
								type="text"
								name="search"
								value={this.state.term}
								onClick={(e) => this.setState({term: ''})}
								onChange={(e) => this.setState({term: e.target.value})}
							/>
							{this.props.children}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;

// Making sure value of 'this' is defined inside a class
// Solution 1 -- this.funcName = this.funcName.bind(this) in constructor
// Solution 2 -- convert function to arrow function which passes 'this' context automatically
// Solution 3 -- pass in function call using arrow function {(e) => this.myFunc(e)}
