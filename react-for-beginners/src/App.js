import { useState, useEffect } from "react";

function Hello() {
  function byeFunc() {
    console.log("component got destroyed");
  }
  function hifunc() {
    console.log("component got called");
    return byeFunc;
  }

  useEffect(hifunc, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      <h1>할 수 있다.</h1>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

//clean up state를 만들어요 useState
export default App;
