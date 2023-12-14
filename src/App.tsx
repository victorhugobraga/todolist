import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { TodoList } from "./components/TodoList";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

export type Task = {
  id: number;
  description: string;
  completed: boolean;
};

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [task, setTask] = useState<Task[]>([]);

  const handleCreateTask = () => {
    if (taskInput === "") return;

    const newTask = {
      id: Math.random(),
      description: taskInput,
      completed: false,
    };

    setTask([...task, newTask]);
    setTaskInput("");
  };

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.createTask}>
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Adicione uma nova tarefa"
          />

          <button onClick={handleCreateTask}>
            Criar <IoMdAddCircleOutline />
          </button>
        </div>

        <main>
          <TodoList tasks={task} setTask={setTask} />
        </main>
      </div>
    </div>
  );
}

export default App;
