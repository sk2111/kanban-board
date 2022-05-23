//libs
import React from "react";
import PropTypes from "prop-types";
//css
import styles from "./BoardColumn.module.css";
//components
import { Droppable, Draggable } from "react-beautiful-dnd";
import BoardTask from "components/reusables/BoardTask/BoardTask";

const BoardColumn = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(providedOuter) => (
        <div
          className={styles.container}
          ref={providedOuter.innerRef}
          {...providedOuter.draggableProps}
        >
          <h2 className={styles.title} {...providedOuter.dragHandleProps}>
            {column.title}
          </h2>
          <Droppable droppableId={column.id} type="task">
            {(providedInner) => (
              <div
                className={styles.taskList}
                ref={providedInner.innerRef}
                {...providedInner.droppableProps}
              >
                {tasks.map((task, idx) => (
                  <BoardTask key={task.id} task={task} index={idx} />
                ))}
                {providedInner.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

BoardColumn.propTypes = {
  column: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export default BoardColumn;
