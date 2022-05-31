import { Component } from 'react';
import s from './Styles.module.css';
import ApiService from './ApiService';
const apiService = new ApiService();
class Button extends Component {
  state = {
    status: 'resolved',
  };

  onLoadMoreClick = () => {
    this.setState({ status: 'pending' });
    apiService.query = this.props.result;
    console.log(this.state.counter);
    apiService.fetchPhotos().then(response => {
      this.props.onClick(response.data.hits);
      if (this.counter * 12 >= response.data.totalHits) {
        this.setState({ status: 'rejected' });
      } else {
        this.setState({ status: 'resolved' });
      }
    });
  };

  render() {
    if (this.state.status === 'resolved') {
      return (
        <button className={s.button} onClick={this.onLoadMoreClick}>
          Load more
        </button>
      );
    }
  }
}
export default Button;
