import React from "react";
import Modal from 'react-bootstrap/Modal'

function Blog(details) {
    const [show, setShow] = useState(false);
    
    let bloginfo = details;

    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Custom Width Modal
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="blog details"
        >
          <Modal.Header closeButton>
            <Modal.Title id="blog details">
              {bloginfo.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {bloginfo.description}
              {bloginfo.content}
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  render(<Blog />);