import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.imageRef = React.createRef();
		this.state = {spans: 0, evenedHeight: ''};
	}
	setSpans = () => {
		// round image height to nearest 10px
		this.imageRef.current.height = Math.round(this.imageRef.current.clientHeight / 10) * 10;
		const height = this.imageRef.current.clientHeight;

		let spans = Math.ceil(height / 10) + 1;

		console.log(spans);
		this.setState({spans});
		// round image hight to fit available grid space
	};
	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
	}
	render() {
		const {alt_description, urls} = this.props.image;

		return (
			<img
				className="ui centered image"
				style={{gridRowEnd: `span ${this.state.spans}`}}
				ref={this.imageRef}
				alt={alt_description}
				src={urls.regular}
			/>
		);
	}
}

export default ImageCard;
