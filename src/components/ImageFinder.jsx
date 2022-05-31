import React, { Component } from 'react';
import ImageGallery from './ImageGallery';
import SearchBar from './Searchbar';

class ImageFinder extends Component {
  state = {
    value: null,
  };
  onSubmit = value => {
    this.setState({ value });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery result={this.state.value} />
      </div>
    );
  }
}
export default ImageFinder;
