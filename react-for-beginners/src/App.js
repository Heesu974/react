import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log('I run when "keyword" changes');
    }
  }, [keyword]);
  //keyword가 change할 때만 useEffect가 실행
  useEffect(() => {
    if (counter !== 0) {
      console.log('I run when "counter" changes');
    }
  }, [counter]);

  return (
    <div>
      <h1>할 수 있다.</h1>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here..."
      />
      <h3>{counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
