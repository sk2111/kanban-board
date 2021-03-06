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

  const handleColumnSwap = (source, destination, draggableId) => {
    const newColumnOrder = Array.from(boardInfo.columnOrder);
    newColumnOrder.splice(source.index, 1);
    newColumnOrder.splice(destination.index, 0, draggableId);

    setBoardInfo((prevState) => ({
      ...prevState,
      columnOrder: newColumnOrder,
    }));
  };

  const handleColumnTaskSwap = (
    start,
    finish,
    source,
    destination,
    draggableId,
  ) => {
    const newUserIds = Array.from(start.userIds);
    newUserIds.splice(source.index, 1);
    newUserIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...finish,
      userIds: newUserIds,
    };

    setBoardInfo((prevState) => ({
      ...prevState,
      columns: {
        ...prevState.columns,
        [newColumn.id]: newColumn,
      },
    }));
  };

  const handleColumnToColumnSwap = (
    start,
    finish,
    source,
    destination,
    draggableId,
  ) => {
    const startUsersIds = Array.from(start.userIds);
    startUsersIds.splice(source.index, 1);
    const newStart = {
      ...start,
      userIds: startUsersIds,
    };
    const finishUserIds = Array.from(finish.userIds);
    finishUserIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      userIds: finishUserIds,
    };

    setBoardInfo((prevState) => ({
      ...prevState,
      columns: {
        ...prevState.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }));
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const start = boardInfo.columns[source.droppableId];
    const finish = boardInfo.columns[destination.droppableId];

    if (type === "column") {
      handleColumnSwap(source, destination, draggableId);
    } else if (start === finish) {
      //same column task swap
      handleColumnTaskSwap(start, finish, source, destination, draggableId);
    } else {
      // Moving from one list to another
      handleColumnToColumnSwap(start, finish, source, destination, draggableId);
    }
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
                  const filteredUsers = getFilteredList(
                    column,
                    boardInfo,
                    searchTerm,
                  );

                  return (
                    <BoardColumn
                      key={column.id}
                      column={column}
                      tasks={filteredUsers}
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
