import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';



function ModalRegister( {handleClose, show} ) {

    const [isRegister, setIsRegister] = useState(true)

    const [text, setText] = useState('Already')

    const [message] = useState(null);

    const switchRegister = () => {
      text === 'Already' ? setText("Don't") : setText('Already')
      setIsRegister(!isRegister)
    }


  return (
    <>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header className="bg-white border-0">
          <Modal.Title>{isRegister ? "Create Account" : "Login"}</Modal.Title>
        </Modal.Header>

        <Modal.Body className='bg-white border-0'>
          <p className='text-black'>{text} Have an Account? Click <span onClick={switchRegister} className='here' style={{cursor:'pointer', color:'red'}}> Here</span></p>
        </Modal.Body>

        <Modal.Body className="bg-white">
          {message && message}
          <Form>
          {isRegister ? (
                <>

            {/* Fullname */}
            <Form.Group className="mb-3" controlId="fullname">
            <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fullname"
                className="mb-3 text-white formModal"
                name="fullname"
              />
              </Form.Group>
              </>) : ("") }
              
            {/* Email */}
            <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                className="mb-3 text-white formModal"
                name="email"
                autoFocus
              />
              </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="mb-3 text-white formModal"
                name="password"
              />
              </Form.Group>
            
          <Button variant="primary" type="submit" className="bg-danger text-light border-0 btn-full" size="lg">
            {isRegister ? "Create Account" : "Login"}
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRegister