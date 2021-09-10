import { useSelector } from "react-redux";
import { Prblm } from "../../models/prblmItem";
import { RootState } from "../../store";
import styles from "./Problem.module.scss";

const Problem: React.FC<{ data: Prblm }> = ({ data }) => {
  const { theme } = useSelector((state: RootState) => state.login);
  const styleDifficulty = {
    "--color":
      data.difficulty === "Easy"
        ? "rgb(8, 155, 1)"
        : data.difficulty === "Medium"
        ? "rgb(209, 185, 0)"
        : "rgb(186, 4, 4)",
  } as React.CSSProperties;

  const txtareaColor = {
    "--colorBack":
      theme === "tomorrow_night_bright" ? "rgb(57, 57, 57)" : "whitesmoke",
    "--colorText": theme === "tomorrow_night_bright" ? "white" : "black",
  } as React.CSSProperties;

  return (
    <div className={styles.problem}>
      <p>
        {`${data.no}- ${data.name}`}
        <span style={styleDifficulty}>{`${
          data.difficulty !== "" ? "  ( " + data.difficulty + " )" : ""
        }`}</span>
      </p>
      <textarea disabled value={data.text} style={txtareaColor}></textarea>
    </div>
  );
};

export default Problem;
