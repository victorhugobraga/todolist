import { Task } from "../App";
import { Todo } from "./Todo";
import styles from "./TodoList.module.css";
import Clipboard from "../assets/Clipboard.svg";

type TodoListProps = {
  tasks: Task[];
  setTask: (task: Task[]) => void;
};

export const TodoList = (props: TodoListProps) => {
  return (
    <div className={styles.todolist}>
      <header>
        <p className={styles.createdTasks}>
          Tareas criadas <span>{props.tasks?.length ?? 0}</span>
        </p>
        <p className={styles.finishedTasks}>
          Concluídas{" "}
          <span>
            {props.tasks && props.tasks.length > 0
              ? `${props.tasks.filter((x) => x.completed).length} de ${
                  props.tasks.length
                }`
              : 0}
          </span>
        </p>
      </header>

      <main>
        {props.tasks && props.tasks.length > 0 ? (
          props.tasks.map((task) => (
            <Todo task={task} setTask={props.setTask} tasks={props.tasks} />
          ))
        ) : (
          <div className={styles.statusMenssage}>
            <img src={Clipboard} alt="Prancheta vazia" />
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
