import styles from "./Search.module.scss";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import SpinnerDots from "../../UI/Spinner/SpinnerDots";
import { useRouter } from "next/router";

const Search = () => {
  const [showResults, setShowResults] = useState(false);
  const [filter, setFilter] = useState("");
  const [lastSearchedText, setLastSearchedText] = useState("");
  const [results, setResults] = useState({ my: [], ya: [] });
  const { openSearch, privateSearch } = useSelector(
    (state: RootState) => state.web
  );

  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();
  const searchHandler = useCallback(
    (key: string) => {
      if (!key) return;
      const my = privateSearch.filter(
        el =>
          el.no.toLowerCase().includes(key) ||
          el.name.toLowerCase().includes(key)
      );

      const ya = openSearch.filter(
        el =>
          el.no.toLowerCase().includes(key) ||
          el.name.toLowerCase().includes(key)
      );

      setResults({ my, ya });
      setIsSearching(false);
    },
    [openSearch, privateSearch]
  );

  useEffect(() => {
    const inputTimer = setTimeout(() => {
      if (filter !== lastSearchedText) {
        setLastSearchedText(filter);
        searchHandler(filter);
        setShowResults(true);
      }
    }, 500);
    return () => clearTimeout(inputTimer);
  }, [filter, lastSearchedText, searchHandler]);

  return (
    <div className={styles.search}>
      <input
        className={styles.box}
        type="search"
        placeholder="Search"
        onMouseEnter={() => setShowResults(true)}
        onChange={e => {
          setIsSearching(true);
          const newFilter = e.currentTarget.value.trim().toLocaleLowerCase();
          if (newFilter !== filter) setFilter(newFilter);
        }}
      />

      {showResults && filter.length > 0 && (
        <div
          className={styles.result}
          onMouseEnter={() => setShowResults(true)}
          onMouseLeave={() => setShowResults(false)}
        >
          {isSearching ? (
            <div className={styles.spinner}>
              <SpinnerDots />
            </div>
          ) : (
            <>
              {Object.entries(results).map(
                el =>
                  el[1].length > 0 && (
                    <div>
                      <h6>{el[0] === "my" ? "Your problems" : "Others"}</h6>
                      {el[1].map((rslt, i) => (
                        <p
                          onClick={() => {
                            setShowResults(false);
                            router.push(
                              `/editor/?type=${
                                el[0] === "my" ? "private" : "open"
                              }&no=${rslt.no}`
                            );
                          }}
                          key={i}
                        >{`${rslt.no}- ${rslt.name}`}</p>
                      ))}
                    </div>
                  )
              )}
              {!results.ya.length && !results.my.length && (
                <div>
                  <h6 style={{ color: "red" }}>No matching problems</h6>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default Search;
