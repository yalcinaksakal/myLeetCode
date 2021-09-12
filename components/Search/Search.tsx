import styles from "./Search.module.scss";
import { useState } from "react";
const Search = () => {
  const [showResults, setShowResults] = useState(false);
  const [filter, setFilter] = useState("");
  return (
    <div className={styles.search}>
      <input
        className={styles.box}
        type="search"
        placeholder="Search"
        onMouseEnter={() => setShowResults(true)}
        onChange={e => {
          const text = e.currentTarget.value;
          const newFilter = text.trim();
          if (newFilter !== filter) setFilter(newFilter);
        }}
      />
      {showResults && filter.length > 0 && (
        <div
          className={styles.result}
          onMouseEnter={() => setShowResults(true)}
          onMouseLeave={() => setShowResults(false)}
        >
          Search Results
        </div>
      )}
    </div>
  );
};
export default Search;
