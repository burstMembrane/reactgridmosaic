import React, {Component} from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {className: 'image-grid'};
	}
	componentDidUpdate() {
		this.setState = {className: 'ui active loader'};
	}
	componentDidMount() {
		console.log('mounted');
	}

	render() {
		const images = this.props.images.map((image) => {
			return <ImageCard style={{opacity: 0.5}} key={image.id} image={image} />;
		});
		return <div className={this.state.className}> {images} </div>;
	}
}

export default ImageList;
