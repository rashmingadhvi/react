import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";
import { Suspense, lazy, useState } from "react";

const Dashboard = () => {
  const [showIt, setShowIt] = useState(false);

  const hideModal = () => setShowIt(false);
  const showModal = () => setShowIt(true);

  const Modal2 = lazy(() => import("react-bootstrap"));
  //const moment = lazy(() => import("moment"));
  console.log(Modal2);
  return (
    <>
      <h1> This is a Dashboard!</h1>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Link to="/">
          <Button className="text-capitalize">Home</Button>
        </Link>
        <span>&nbsp;</span>
        <Button className="text-capitalize" onClick={showModal}>
          Modal Demo
        </Button>

        <Modal show={showIt}>
          <ModalHeader closeButton>A bootstrap modal</ModalHeader>
          <ModalBody>
            <h4> This is a sample modal dialog box</h4>
          </ModalBody>
          <ModalFooter>
            <Button className="text-capitalize" onClick={hideModal}>
              Cancel
            </Button>
            <Button className="text-capitalize" onClick={hideModal}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
      </Suspense>
    </>
  );
};

export default Dashboard;
