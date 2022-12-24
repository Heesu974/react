import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>할 수 있다.</h1>
      <Button text={12} />
    </div>
  );
}

export default App;
