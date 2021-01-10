import React from 'react';
import Modal from 'react-modal';
//onRequestClose fires when the Esc is clicked or user clicks outside the modal
//appElement={document.getElementById('app')} is to prevent warning mentioned here:
//https://stackoverflow.com/questions/48269381/warning-react-modal-app-element-is-not-defined-please-use-modal-setappeleme
//Visually, I can't see that it makes any difference, but the warning is gone
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleDeselectOption}
        appElement={document.getElementById('app')}
        closeTimeoutMS={1200}
    >
        <h2> Selected Option</h2>
        { props.selectedOption && <p>{ props.selectedOption}</p> }

        <button onClick={props.handleDeselectOption}>Okay</button>
    </Modal>
);

export default OptionModal;
