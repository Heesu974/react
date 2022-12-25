import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };
  console.log(todos);
  //각각을 component로 만들어 봅시다.
  console.log(todos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <form onSubmit={onSubmit}>
        <legend>할 수 있다. - {todos.length}</legend>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="해야 할 일 입력"
        />
        <button>추가</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
