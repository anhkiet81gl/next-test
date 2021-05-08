import {Modal,Button} from 'react-bootstrap';
import {useState} from "react";

function Todo(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="card-body">
                        {props.children}
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-success mr-2">Open</button>
                        <button className="btn btn-danger" onClick={handleShow}>Delete</button>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure delete todo</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      No
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default Todo;