import { Todo } from "./Todo";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  return (
    <div className={styles.todolist}>
      <header>
        <p className={styles.createdTasks}>
          Tarefas criadas <span>5</span>
        </p>
        <p className={styles.finishedTasks}>
          Concluídas <span>2 de 5</span>
        </p>
      </header>

      <main>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </main>
    </div>
  );
};
