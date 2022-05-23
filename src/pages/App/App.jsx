//libs
import React from "react";
//css
import styles from "./App.module.css";
//components
import BoardView from "components/containers/BoardView/BoardView";

const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Kanban board</h1>
      </header>
      <main className={styles.board}>
        <BoardView />
      </main>
    </div>
  );
};

export default App;
