import Form from "react-bootstrap/esm/Form";
import { AddressDataType } from "./AddressDataType";
import { FormGroup } from "react-bootstrap";

export type AddressType = "Home" | "Office";

interface Props {
  type: AddressType;
  data: AddressDataType;
  onChange: (data: AddressDataType) => void;
}
export const Address = (props: Props) => {
  console.log(props);
  return (
    <>
      <p>This is Address generic comp!</p>
      <Form noValidate validated={true}>
        <FormGroup>
          <Label></Label>
        </FormGroup>
      </Form>
    </>
  );
};
