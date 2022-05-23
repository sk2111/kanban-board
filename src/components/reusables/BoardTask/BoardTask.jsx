//libs
import React from "react";
import PropTypes from "prop-types";
//css
import styles from "./BoardTask.module.css";
//components
import { Draggable } from "react-beautiful-dnd";

const BoardTask = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          className={styles.container}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className={styles.taskName}>{task.name}</p>
          <p className={styles.company}>{task.company}</p>
        </div>
      )}
    </Draggable>
  );
};

BoardTask.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default BoardTask;
