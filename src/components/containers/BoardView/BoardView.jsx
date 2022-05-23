//libs
import React, { useState } from "react";
//css
import styles from "./BoardView.module.css";
//components
import { DragDropContext } from "react-beautiful-dnd";
import SearchBar from "components/reusables/SearchBar/SearchBar";
import BoardColumn from "components/reusables/BoardColumn/BoardColumn";

const BoardView = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className={styles.container}>
      <SearchBar
        placeholder="Search for user name"
        debounceTimeInMs={400}
        value={searchTerm}
        handleChange={(value) => setSearchTerm(value)}
      />
      <div className={styles.mainZone}>
        <DragDropContext>
          <BoardColumn
            title="open"
            columnId="open"
            tasks={[
              { id: "task-1", content: "Take out the garbage" },
              { id: "task-2", content: "Watch my favorite show" },
              { id: "task-3", content: "Charge my phone" },
              { id: "task-4", content: "Cook dinner" },
            ]}
          />
        </DragDropContext>
      </div>
    </section>
  );
};

BoardView.propTypes = {};

export default BoardView;
