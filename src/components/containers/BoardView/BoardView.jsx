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
              {
                id: "1",
                name: "Amirdharshan A",
                company: "Intellecytx Data Science",
              },
              {
                id: "2",
                name: "Vimal Kumar",
                company: "Sirius Computer Solutions",
              },
              {
                id: "3",
                name: "Jayakrishnanan",
                company: "Lakeba IT Solutions",
              },
              { id: "4", name: "Affan Ahmed", company: "Smart Parking" },
            ]}
          />
        </DragDropContext>
      </div>
    </section>
  );
};

BoardView.propTypes = {};

export default BoardView;
