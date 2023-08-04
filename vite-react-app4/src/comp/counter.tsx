import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Button } from "react-bootstrap";
import { incr, incAmount, dec, reset } from "../redux/slices/counterSlice";

export default function Counter() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      {counter} &nbsp;&nbsp;
      <Button onClick={() => dispatch(incr())}> Increment (+) </Button>
      <Button onClick={() => dispatch(dec())}> Decrement (-) </Button>
      <Button onClick={() => dispatch(incAmount(4))}>
        {" "}
        Increment Amount (++){" "}
      </Button>
      <Button onClick={() => dispatch(reset())}> Reset (.) </Button>
    </>
  );
}
