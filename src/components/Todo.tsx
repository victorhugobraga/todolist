import { Task } from "../App";
import styles from "./Todo.module.css";
import { FaRegTrashAlt } from "react-icons/fa";

type TodoProps = {
  task: Task;
};

export const Todo = ({ task }: TodoProps) => {
  return (
    <div className={styles.todo}>
      <label htmlFor="check">
        <input type="radio" name="check" id="check" />
      </label>
      <p>{task.description}</p>
      <button aria-label="excluír" title="excluir comentário">
        <FaRegTrashAlt />
      </button>
    </div>
  );
};
