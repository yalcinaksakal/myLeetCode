import styles from "./ProblemList.module.scss";

import ListItem from "./ListItem/ListItem";
import PrblmItem from "../../models/prblmItem";

const ProblemList: React.FC<{ list: PrblmItem[] }> = ({ list }) => {
  return (
    <ul className={styles.list}>
      <ListItem
        index={0}
        item={{ no: "No", name: "TITLE", difficulty: "DIFFICULTY" }}
      />
      {list.map((item, i) => (
        <ListItem
          key={i}
          index={i + 1}
          item={item}
          //   clicked={ctx.deleteTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default ProblemList;
