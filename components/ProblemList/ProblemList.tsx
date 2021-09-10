import styles from "./ProblemList.module.scss";

import ListItem from "./ListItem/ListItem";
import PrblmItem from "../../models/prblmItem";
import Pagination from "../../UI/Pagination/Pagination";

const ProblemList: React.FC<{ list: PrblmItem[] }> = ({ list }) => {
  return (
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
      <Pagination numberOfPages={9} currentPage={6} />
    </div>
  );
};

export default ProblemList;
