import styles from "./ListItem.module.scss";
import PrblmItem from "../../../models/prblmItem";
const ListItem: React.FC<{ item: PrblmItem; index: number }> = ({
  item,
  index,
}) => {
  const style = {
    "--backColor": index % 2 ? "#f7f5ef" : "#ece6d3",
  } as React.CSSProperties;
  console.log(index);
  return (
    <li
      className={styles.item}
      style={style}
      // onClick={props.clicked}>
    >
      {Object.values(item).join("-")}
    </li>
  );
};

export default ListItem;
