import styles from "./Header.module.css";
import todolistLogo from "../assets/todolist-logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={todolistLogo} alt="Logotipo To Do List" />
    </header>
  );
};
