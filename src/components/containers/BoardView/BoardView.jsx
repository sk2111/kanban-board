//libs
import React, { useState } from "react";
//css
import styles from "./BoardView.module.css";
//components
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import SearchBar from "components/reusables/SearchBar/SearchBar";
import BoardColumn from "components/reusables/BoardColumn/BoardColumn";
//mock data
import { mockBoardInfo } from "./mock";
//helpers
import { getFilteredList } from "utils/helpers";

const BoardView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [boardInfo, setBoardInfo] = useState(mockBoardInfo);

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
        placeholder="Search by user name"
        debounceTimeInMs={400}
        value={searchTerm}
        handleChange={(value) => setSearchTerm(value)}
      />
      <div className={styles.mainZone}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {(provided) => (
              <div
                className={styles.zoneContainer}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {boardInfo.columnOrder.map((columnId, index) => {
                  const column = boardInfo.columns[columnId];
                  const users = column.userIds.map(
                    (userId) => boardInfo.users[userId],
                  );
                  return (
                    <BoardColumn
                      key={column.id}
                      column={column}
                      tasks={users}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </section>
  );
};

BoardView.propTypes = {};

export default BoardView;
