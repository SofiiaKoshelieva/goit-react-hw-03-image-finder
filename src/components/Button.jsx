import { Component } from 'react';
import s from './Styles.module.css';
import ApiService from './ApiService';
import Loader from './Loader';
const apiService = new ApiService();

class Button extends Component {
  state = {
    status: 'resolved',
    counter: 1,
  };

  onLoadMoreClick = () => {
    if (this.state.counter === 1) {
      apiService.incrementPage();
    }
    this.setState(prevState => ({
      status: 'pending',
      counter: prevState.counter + 1,
    }));

    apiService.query = this.props.result;
    console.log(this.state.counter);
    apiService.fetchPhotos().then(response => {
      this.props.onClick(response.data.hits);
      if (this.state.counter * 12 >= response.data.totalHits) {
        this.setState({ status: 'rejected' });
      } else {
        this.setState({ status: 'resolved' });
      }
    });
  };

  render() {
    if (this.state.status === 'pending') {
      return <Loader />;
    }
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
