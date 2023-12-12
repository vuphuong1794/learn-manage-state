import "./App.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "tang":
      return (state += 1);
    case "giam":
      return (state -= 1);
    case "xoaAll":
      return 0;
    default:
      return;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch("tang")}>tang</button>
      <button onClick={() => dispatch("giam")}>giam</button>
      <button onClick={() => dispatch("xoaAll")}>reset</button>
    </>
  );
}

export default App;
