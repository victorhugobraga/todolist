import styles from "./Todo.module.css";
import { FaRegTrashAlt } from "react-icons/fa";

export const Todo = () => {
  return (
    <div className={styles.todo}>
      <label htmlFor="check"></label>
      <input type="radio" name="check" id="check" />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button aria-label="excluír" title="excluir comentário">
        <FaRegTrashAlt />
      </button>
    </div>
  );
};
