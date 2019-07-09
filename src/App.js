import React from "react";
import { useSelector, useDispatch, useStore, connect } from "react-redux";
import { Button } from "reactstrap";
import { increment, decrement } from "./store/actions";

function App(props) {
  console.log(props)
  const dispatch = useDispatch();
  const number = useSelector(state => state.number);
  return (
    <div className="App">
      <h3>Hello{number}</h3>
      <Button onClick={() => dispatch(increment())}>Plus</Button>
      <Button onClick={() => dispatch(decrement())}>Minus</Button>
    </div>
  );
}

const mapStateToProps = state => ({
  number: state.number
});
export default connect(mapStateToProps)(App);
