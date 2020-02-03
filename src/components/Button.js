import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.iconClass = `${props.icon} icon`;
		this.state = {icon: this.iconClass, btnClass: 'ui icon button'};
	}

	onBtnClick(e) {
		if (this.props.showLoading) {
			this.setState({btnClass: 'ui loading icon button'});
		}
	}

	render() {
		return (
			<button onClick={(e) => this.onBtnClick(e)} className={this.state.btnClass}>
				<i className={this.state.icon} />{' '}
			</button>
		);
	}
}

export default Button;
