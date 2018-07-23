import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class ClassOfTheDay extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   modalIsOpen: false
    // };
 
    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }
  
  // openModal() {
  //   this.setState({modalIsOpen: true});
  // }
 
  // afterOpenModal() {
  //   this.subtitle.style.color = '#f00';
  // }
 
  // closeModal() {
  //   this.setState({modalIsOpen: false});
  // }

  render() {
    return (
      <div className='classOfTheDay'>
        {/* <button onClick={this.openModal}>Open Modal</button> */}
        <Modal
          isOpen={this.props.isOpen}
          onAfterOpen={this.props.onAfterOpen}
          onRequestClose={this.props.onRequestClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.props.onRequestClose}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    )
  }
} 