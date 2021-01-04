import React from 'react';
import Modal from 'react-modal';

//onRequestClose fires when the Esc is clicked or user clicks outside the modal
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleDeselectOption}
    >
        <h2> Selected Option</h2>
        { props.selectedOption && <p>{ props.selectedOption}</p> }

        <button onClick={props.handleDeselectOption}>Okay</button>
    </Modal>
);

export default OptionModal;
