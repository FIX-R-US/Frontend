import React from 'react'
import Modal from 'react-bootstrap/Modal'
import './Prompts.css'

function Prompts({showModal, hideModal, message, action, title}) {
  return (
    <Modal
      show={showModal}
      onHide={hideModal}
    >
     <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
     </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={action} className="modal--button">
          Yes
        </button>
        <button onClick={hideModal} className="modal--button">
          No
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default Prompts