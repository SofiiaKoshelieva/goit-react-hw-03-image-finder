import { Component } from 'react';
import ApiService from './ApiService';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import Modal from './Modal';
import s from './Styles.module.css';
const apiService = new ApiService();
class ImageGallery extends Component {
  state = {
    result: '',
    status: 'idle',
    totalHits: null,
    showModal: false,
    largeImageURL: '',
  };
  openModal = largeUrl => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: largeUrl,
    }));
  };
  onCloseModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  onLoadMore = data => {
    this.setState(({ result }) => {
      return { result: [...result, ...data] };
    });
  };
  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.result;
    const current = this.props.result;
    if (prevSearch !== current) {
      this.setState({ status: 'pending' });
      apiService.query = current;
      apiService.fetchPhotos().then(response => {
        if (response.data.totalHits > 0) {
          this.setState({
            result: response.data.hits,
            status: 'resolved',
            totalHits: response.data.totalHits,
          });

          console.log(this.state.result);
        } else {
          this.setState({ status: 'rejected' });
          alert('ничего не найдено');
        }
      });
    }
  }

  render() {
    const { result, status, showModal, largeImageURL, totalHits } = this.state;

    if (status === 'resolved') {
      return (
        <div>
          {showModal && (
            <Modal
              largeImageURL={largeImageURL}
              onCloseModal={this.onCloseModal}
            />
          )}
          <ul className={s.imageGallery}>
            <ImageGalleryItem data={result} openModal={this.openModal} />
          </ul>

          <Button
            result={this.props.result}
            hits={totalHits}
            onClick={this.onLoadMore}
          />
        </div>
      );
    }
  }
}
export default ImageGallery;
