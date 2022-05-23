//libs
import React, { useState } from "react";
//css
import styles from "./BoardView.module.css";
//components
import SearchBar from "components/reusables/SearchBar/SearchBar";

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
      <div className={styles.mainZone}>I am main zone</div>
    </section>
  );
};

BoardView.propTypes = {};

export default BoardView;
