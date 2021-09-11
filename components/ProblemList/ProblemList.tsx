import styles from "./ProblemList.module.scss";

import ListItem from "./ListItem/ListItem";
import PrblmItem from "../../models/prblmItem";
import Pagination from "../../UI/Pagination/Pagination";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ProblemList: React.FC<{ list: PrblmItem[]; type: string }> = ({
  list,
  type,
}) => {
  const router = useRouter();
  let { page } = router.query;
  const { pathname } = router;

  const { openSolutionsLength } = useSelector((state: RootState) => state.web);
  const { itemsPerPage } = useSelector((state: RootState) => state.login);
  const currentPage =
    !page ||
    +page < 1 ||
    +page > openSolutionsLength ||
    typeof +page !== "number"
      ? 1
      : +page;

  return list.length ? (
    <div className={styles.container}>
      <ul className={styles.list}>
        <ListItem
          index={0}
          item={{ no: "No", name: "TITLE", difficulty: "DIFFICULTY" }}
        />
        {list.map((item, i) => (
          <ListItem key={i} index={i + 1} item={item} />
        ))}
      </ul>
      <Pagination
        numberOfPages={Math.ceil(openSolutionsLength / itemsPerPage)}
        currentPage={currentPage}
        path={pathname}
      />
    </div>
  ) : (
    <h1>No items</h1>
  );
};

export default ProblemList;
