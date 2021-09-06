import styles from "./ListItem.module.scss";
import PrblmItem from "../../../models/prblmItem";
const ListItem: React.FC<{ item: PrblmItem; index: number }> = ({
  item,
  index,
}) => {
  const style = {
    "--backColor": index % 2 ? "#f7f5ef" : "#eeeadc",
  } as React.CSSProperties;
  const styleDifficulty = {
    "--color":
      item.difficulty === "Easy"
        ? "rgb(8, 155, 1)"
        : item.difficulty === "Medium"
        ? "rgb(209, 185, 0)"
        : "rgb(186, 4, 4)",
  } as React.CSSProperties;

  return (
    <li
      className={index ? styles.item : styles.heading}
      style={style}
      // onClick={props.clicked}>
    >
      <div className={styles.no}>{item.no}</div>
      <div className={styles.name}>{item.name}</div>
      <div className={styles.difficulty} style={styleDifficulty}>
        {item.difficulty}
      </div>
    </li>
  );
};

export default ListItem;
