import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { TodoList } from "./components/TodoList";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.createTask}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Adicione uma nova tarefa"
          />

          <button>Criar</button>
        </div>

        <main>
          <TodoList />
        </main>
      </div>
    </div>
  );
}

export default App;
