import { useEffect, useState } from "react";
import { Button, ListGroup, Tab, Table, Tabs } from "react-bootstrap";
import CartoonSvc, { ICartoon } from "../service/CartoonSvc";
import AppImage from "./common/AppImage";
import EmployeeSvc, { IEmployee } from "../service/EmployeeSvc";
import { useDispatch, useSelector } from "react-redux";
import { delEmp, hideEmpForm } from "../redux/slices/empSlice";
import { RootState } from "../redux/store";
import EmpForm from "../forms/EmpForm";

const GridData = () => {
  const [data, setData] = useState<ICartoon[]>([]);
  const [empData, setEmpData] = useState<IEmployee[]>([]);
  const dispatch = useDispatch();
  const empData2 = useSelector((state: RootState) => state.empsvc.empData);

  useEffect(() => {
    CartoonSvc().then((d) => setData(d));
    EmployeeSvc.getAll()
      .then((resp) => {
        setEmpData(resp.data);
      })
      .catch((e) => console.error(e))
      .finally(() => console.log("Got Response!"));
  }, [empData2]);

  return (
    <>
      <h1>Here is list of data using Grid</h1>
      <Button
        onClick={(e) => {
          e.preventDefault();
          dispatch(hideEmpForm(false));
        }}
      >
        Create Employee
      </Button>
      <EmpForm />
      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Grid Example">
          Tab 1 content
          {
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Creator</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, idx) => (
                  <tr key={d.id}>
                    <td>{idx + 1}</td>
                    <td>{d.title}</td>
                    <td>{d.creator}</td>
                    <td>{d.rating}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          }
        </Tab>
        <Tab eventKey={2} title="Other Example">
          <ListGroup>
            {data.map((d) => (
              <ListGroup.Item key={d.id}>
                {d.id} - {d.genre} - <AppImage url={d.image} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Tab>
        <Tab eventKey={3} title="Employees">
          <ListGroup>
            {empData.map((d) => (
              <ListGroup.Item key={d.empId}>
                {d.empId} - {d.fName} {d.lName}  - {d.grade}  {d.salary} {d.isContractor} &nbsp;
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(delEmp(d.empId));
                  }}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Tab>
      </Tabs>
    </>
  );
};

export default GridData;
