import React from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer';

function Notifications({message, show, bg}) {
  return (
      <ToastContainer position='top-center' className='p-3' style={{textAlign:'center',color:'white'}}>
        <Toast delay={3000} autohide bg={bg} show={show} onClose={show}>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
  )
}

export default Notifications