import s from './Styles.module.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscKey);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscKey);
  }
  handleEscKey = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };
  closeModal = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };
  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.closeModal}>
        <div className={s.modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
