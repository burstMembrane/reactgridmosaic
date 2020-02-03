// dependencies
import React from 'react';

// local files
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import Button from './Button';
import ImageList from './ImageList';

class App extends React.Component {
	state = {images: []};

	async onSearchSubmit(term) {
		const response = await unsplash.get(`/search/photos`, {params: {query: term}});

		this.setState({images: response.data.results});
	}

	render() {
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar
					onSubmit={(term) => this.onSearchSubmit(term)}
					placeholder="Type search term here"
					label="Image Search"
				>
					<Button icon="search" showLoading={false} />
				</SearchBar>
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
