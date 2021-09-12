import { useRouter } from "next/router";
import styles from "./Filter.module.scss";

const Filter: React.FC<{
  type: string;
  selected: string | string[];
  path: string;
}> = ({ type, selected, path }) => {
  const router = useRouter();
  const arr = ["Easy", "Medium", "Hard", "All"];
  if (type === "private") arr.unshift("Personal");
  return (
    <div className={styles.container}>
      {arr.map((el, i) => (
        <span
          className={selected === el ? styles.active : ""}
          onClick={() =>
            router.push(`${path}?${el === "All" ? "" : `&filter=${el}`}`)
          }
        >
          {el}
        </span>
      ))}
    </div>
  );
};

export default Filter;
