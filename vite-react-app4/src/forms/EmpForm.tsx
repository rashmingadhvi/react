import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  hideEmpForm,
  saveEmp,
  saveEmpFormData,
} from "../redux/slices/empSlice";
import { Address } from "../comp/interfaces/Address";
import { AddressDataType } from "../comp/interfaces/AddressDataType";
const EmpForm = () => {
  const showForm = useSelector((state: RootState) => !state.empsvc.hideForm);
  const validated = useSelector((state: RootState) => state.empsvc.validForm);

  const dispatch = useDispatch();
  return (
    <>
      <Modal show={showForm} onHide={() => dispatch(hideEmpForm(true))}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="input"
                required
                placeholder="First Name"
                autoFocus
                onChange={(e) => {
                  e.preventDefault();
                  dispatch(
                    saveEmpFormData({
                      type: "fname",
                      value: e.currentTarget.value,
                    })
                  );
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="input"
                required
                placeholder="Last Name"
                onChange={(e) => {
                  e.preventDefault();
                  dispatch(
                    saveEmpFormData({
                      type: "lname",
                      value: e.currentTarget.value,
                    })
                  );
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="number"
                defaultValue={0.0}
                placeholder="Salary"
                onChange={(e) => {
                  e.preventDefault();
                  dispatch(
                    saveEmpFormData({
                      type: "salary",
                      value: e.currentTarget.value,
                    })
                  );
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Grade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Grade"
                onChange={(e) => {
                  e.preventDefault();
                  dispatch(
                    saveEmpFormData({
                      type: "grade",
                      value: e.currentTarget.value,
                    })
                  );
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Contractor?</Form.Label>
              <Form.Select
                size="sm"
                onChange={(e) => {
                  e.preventDefault();
                  const val = e.target.value;
                  console.log("-->" + val);
                  dispatch(
                    saveEmpFormData({
                      type: "contractor",
                      value: val,
                    })
                  );
                }}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label> Home Address</Form.Label>
              <Address
                data={{} as AddressDataType}
                type="Home"
                onChange={() => {
                  return;
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => dispatch(hideEmpForm(true))}
          >
            Close
          </Button>
          <Button variant="primary" onClick={() => dispatch(saveEmp())}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmpForm;
