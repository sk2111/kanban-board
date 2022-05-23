//libs
import React from "react";
import PropTypes from "prop-types";
//css
import styles from "./BoardColumn.module.css";
//components
import { Droppable } from "react-beautiful-dnd";
import BoardTask from "components/reusables/BoardTask/BoardTask";

const BoardColumn = ({ title, columnId, tasks }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        {title} - {tasks.length}
      </h3>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            className={styles.taskList}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <BoardTask key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

BoardColumn.propTypes = {
  title: PropTypes.string.isRequired,
  columnId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tasks: PropTypes.array.isRequired,
};

export default BoardColumn;
