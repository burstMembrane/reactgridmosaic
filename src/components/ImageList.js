import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
	state = {className: 'image-grid', loaded: false};

	render() {
		const images = this.props.images.map((image, i) => {
			return <ImageCard key={image.id} image={image} />;
		});

		return <div className={this.state.className}> {images} </div>;
	}
}

export default ImageList;
