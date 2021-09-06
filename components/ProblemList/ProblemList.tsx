import styles from "./ProblemList.module.scss";

import ListItem from "./ListItem/ListItem";
import PrblmItem from "../../models/prblmItem";

const ProblemList: React.FC<{ list: PrblmItem[] }> = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((item, i) => (
        <ListItem
          key={i}
          index={i}
          item={item}
          //   clicked={ctx.deleteTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default ProblemList;
