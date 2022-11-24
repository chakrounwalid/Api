import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example({user}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      see more
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{user.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p><b>username : </b>{user.username}</p>
        <p><b>email : </b>{user.email}</p>
        <p><b>address : </b>{user.address.suite} {user.address.street}
			<br/>{user.address.city} {user.address.zipcode}</p>
        <p><b>phone : </b>{user.phone}</p>
        <p><b>website : </b>{user.website}</p>
        <p><b>company : </b>{user.company.name}</p>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example