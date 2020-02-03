import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

// TODO: SORT SORT IMAGES INTO SIMILAR HIEGHTS
const compareHeights = (a, b) => {
	return a + b;
};
class ImageList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {className: 'image-grid'};
	}
	componentDidUpdate() {
		console.log(this.props.images);
	}
	componentDidMount() {
		this.props.images.sort((img1, img2) => {
			return compareHeights(img1.height, img2.height);
		});
	}

	render() {
		const images = this.props.images.map((image) => {
			return <ImageCard key={image.id} image={image} />;
		});
		return <div className={this.state.className}> {images} </div>;
	}
}

export default ImageList;
