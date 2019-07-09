import React from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { Button } from "reactstrap";
import { increment, decrement } from "./store/actions";

function App() {
  const store = useStore();
  store.subscribe(() => {
    console.log(store.getState());
  });
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

export default App;
