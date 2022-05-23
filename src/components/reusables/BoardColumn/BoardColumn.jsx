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
      {(provided) => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <h2 className={styles.title} {...provided.dragHandleProps}>
            {column.title}
          </h2>
          <Droppable droppableId={column.id} type="task">
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
