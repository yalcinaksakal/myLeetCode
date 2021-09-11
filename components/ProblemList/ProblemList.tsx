import styles from "./ProblemList.module.scss";

import ListItem from "./ListItem/ListItem";
import PrblmItem from "../../models/prblmItem";
import Pagination from "../../UI/Pagination/Pagination";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import NoItems from "../../UI/NoItems/NoItems";

const ProblemList: React.FC<{ type: string }> = ({ type }) => {
  const router = useRouter();
  let { page } = router.query;
  const { pathname } = router;

  const {
    openSolutionsLength,
    privateSolutionsLength,
    privateSearch,
    openSearch,
  } = useSelector((state: RootState) => state.web);
  const { itemsPerPage, isLoggedIn } = useSelector(
    (state: RootState) => state.login
  );
  const numOfItems =
    type === "open" ? openSolutionsLength : privateSolutionsLength;
  const numOfPages = Math.ceil(numOfItems / itemsPerPage);
  const currentPage =
    !page ||
    +page < 1 ||
    +page > openSolutionsLength ||
    typeof +page !== "number"
      ? 1
      : +page;
  const list = type === "open" ? openSearch : privateSearch;

  const itemsInPage = list.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return list.length ? (
    <div className={styles.container}>
      <ul className={styles.list}>
        <ListItem
          index={0}
          item={{ no: "No", name: "TITLE", difficulty: "DIFFICULTY" }}
        />
        {itemsInPage.map((item, i) => (
          <ListItem key={i} index={i + 1} item={item} />
        ))}
      </ul>
      {numOfPages > 1 && (
        <Pagination
          numberOfPages={numOfPages}
          currentPage={currentPage}
          path={pathname}
        />
      )}
    </div>
  ) : (
    isLoggedIn && <NoItems />
  );
};

export default ProblemList;
