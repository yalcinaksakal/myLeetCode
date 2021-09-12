import styles from "./ProblemList.module.scss";

import ListItem from "./ListItem/ListItem";
import Pagination from "../../UI/Pagination/Pagination";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import NoItems from "../../UI/NoItems/NoItems";
import Filter from "../../UI/Filter/Filter";
import { useState } from "react";

const ProblemList: React.FC<{ type: string }> = ({ type }) => {
  const router = useRouter();
  let { page, filter } = router.query;
  if (!filter) filter = "All";
  const { pathname } = router;

  const [searchFilter, setSearchFilter] = useState("");

  const {
    openSolutionsLength,
    privateSolutionsLength,
    privateSearch,
    openSearch,
  } = useSelector((state: RootState) => state.web);

  const helperFilter = () => {
    const result = [...(type === "open" ? openSearch : privateSearch)];
    if (filter === "All") return result;
    return result.filter(
      el => el.difficulty === (filter === "Personal" ? "" : filter)
    );
  };
  const list = helperFilter();

  const { itemsPerPage } = useSelector((state: RootState) => state.web);

  const numOfItems = list.length;
  const numOfPages = Math.ceil(numOfItems / itemsPerPage);
  const currentPage =
    !page ||
    +page < 1 ||
    +page > (type === "open" ? openSolutionsLength : privateSolutionsLength) ||
    typeof +page !== "number"
      ? 1
      : +page;

  const itemsInPage = list.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    type === "open" ? openSolutionsLength > 0 : privateSolutionsLength > 0
  ) ? (
    <div className={styles.container}>
      <ul className={styles.list}>
        <Filter type={type} selected={filter} path={pathname} />
        <ListItem
          index={0}
          item={{ no: "No", name: "TITLE", difficulty: "DIFFICULTY" }}
          type="heading"
        />
        {list.length > 0 ? (
          itemsInPage.map((item, i) => (
            <ListItem key={i} index={i + 1} item={item} type={type} />
          ))
        ) : (
          <p>No {filter} problems found</p>
        )}
      </ul>
      {numOfPages > 1 && (
        <Pagination
          numberOfPages={numOfPages}
          currentPage={currentPage}
          path={pathname}
          filter={filter}
        />
      )}
    </div>
  ) : (
    <NoItems />
  );
};

export default ProblemList;
