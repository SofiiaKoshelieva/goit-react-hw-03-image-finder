import s from './Styles.module.css';
import { ImSearch } from 'react-icons/im';
import { Component } from 'react';
import Notiflix from 'notiflix';
class SearchBar extends Component {
  state = {
    inputValue: '',
  };
  onInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };
  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue.trim() === '') {
      Notiflix.Notify.failure('Enter a request!!!!!!!');
      return;
    }
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
    e.currentTarget.reset();
  };
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.onFormSubmit}>
          <button type="submit" className={s.searchFormButton}>
            <ImSearch />
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
