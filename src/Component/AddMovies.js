import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function AddMovies({ addNewMovie }) {
  const [show, setShow] = useState(false);

  const [movieInput, setMovieInput] = useState({
    title: "",
    description: "",
    postingURL: "",
    rating: 1,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setMovieInput({
      ...movieInput,
      [e.target.name]: e.target.value,
    });
  };
  const handleAdd = () => {
    addNewMovie(movieInput);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="d-flex flex-column">
              <label>title</label>
              <input type="text" name="title" onChange={handleChange} />
            </div>

            <div className="d-flex flex-column">
              <label>description</label>
              <input type="text" name="description" onChange={handleChange} />
            </div>
            <div className="d-flex flex-column">
              <label>poster url</label>
              <input type="text" name="postingURL" onChange={handleChange} />
            </div>
            <div className="d-flex flex-column">
              <label>rating</label>
              <input
                type="number"
                min={0}
                name="rating"
                onChange={handleChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Save new movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovies;