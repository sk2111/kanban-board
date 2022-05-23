//libs
import React, { useState } from "react";
//css
import styles from "./BoardView.module.css";
//components
import { DragDropContext } from "react-beautiful-dnd";
import SearchBar from "components/reusables/SearchBar/SearchBar";
import BoardColumn from "components/reusables/BoardColumn/BoardColumn";
//mock data
import { userInfo } from "./mock";
//helpers
import { getFilteredList } from "utils/helpers";

const BoardView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(userInfo.open.list);
  const [inProgress, setInProgress] = useState(userInfo.inProgress.list);
  const [completed, setCompleted] = useState(userInfo.completed.list);

  const filterOpen = getFilteredList(searchTerm, open);
  const filterInProgress = getFilteredList(searchTerm, inProgress);
  const filterCompleted = getFilteredList(searchTerm, completed);

  const onDragEnd = (result, state, setState) => {
    const { destination, source } = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const [swappedItem] = state.splice(source.index, 1);
    state.splice(destination.index, 0, swappedItem);
    setState(state);
  };

  return (
    <section className={styles.container}>
      <SearchBar
        placeholder="Search for user name"
        debounceTimeInMs={400}
        value={searchTerm}
        handleChange={(value) => setSearchTerm(value)}
      />
      <div className={styles.mainZone}>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, open, setOpen)}
        >
          <BoardColumn
            title={userInfo.open.title}
            columnId={userInfo.open.title}
            tasks={filterOpen}
          />
        </DragDropContext>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, inProgress, setInProgress)}
        >
          <BoardColumn
            title={userInfo.inProgress.title}
            columnId={userInfo.inProgress.title}
            tasks={filterInProgress}
          />
        </DragDropContext>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, completed, setCompleted)}
        >
          <BoardColumn
            title={userInfo.completed.title}
            columnId={userInfo.completed.title}
            tasks={filterCompleted}
          />
        </DragDropContext>
      </div>
    </section>
  );
};

BoardView.propTypes = {};

export default BoardView;
