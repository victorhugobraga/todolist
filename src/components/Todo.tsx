import { Task } from "../App";
import styles from "./Todo.module.css";
import { FaRegTrashAlt } from "react-icons/fa";

type TodoProps = {
  task: Task;
  tasks: Task[];
  setTask: (task: Task[]) => void;
};

export const Todo = ({ task, setTask, tasks }: TodoProps) => {
  const handleCheckTask = (desc: string) => {
    setTask(
      tasks.map((task) => {
        if (task.description === desc) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const handleDeleteTask = (desc: string) => {
    setTask([...tasks.filter((task) => task.description !== desc)]);
  };
  return (
    <div
      className={styles.todo}
      onClick={() => handleCheckTask(task.description)}
    >
      <div className={task.completed ? styles.completed : ""}>
        <label htmlFor={`check-${task.description}`}>
          <input type="radio" name={`check-${task.description}`} id={`check-${task.description}`} />
        </label>
        <p>{task.description}</p>
      </div>
      <button
        aria-label="excluír"
        title="excluir comentário"
        onClick={() => handleDeleteTask(task.description)}
      >
        <FaRegTrashAlt />
      </button>
    </div>
  );
};
