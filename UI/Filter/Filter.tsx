import styles from "./Filter.module.scss";

const Filter: React.FC<{ clicked: (filter: string) => void; type: string }> = ({
  clicked,
  type,
}) => {
  const arr = ["Easy", "Medium", "Difficult"];
  if (type === "private") arr.unshift("Personal");
  return (
    <div className={styles.container}>
      {arr.map((el, i) => (
        <span onClick={() => clicked(el)}>{el}</span>
      ))}
    </div>
  );
};

export default Filter;
