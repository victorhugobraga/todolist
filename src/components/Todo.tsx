import styles from "./Todo.module.css";

export const Todo = () => {
  return (
    <div className={styles.todo}>
      <label htmlFor="check"></label>
      <input type="radio" name="check" id="check" />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <span>trash</span>
    </div>
  );
};
