import { useState } from "react";
import { useSelector } from "react-redux";
import { Prblm } from "../../models/prblmItem";
import { RootState } from "../../store";
import { deleteSvg } from "../../svg/delete";
import styles from "./Problem.module.scss";

const Problem: React.FC<{ data: Prblm }> = ({ data }) => {
  const { theme } = useSelector((state: RootState) => state.login);

  const [showWarning, setShowWarning] = useState(false);
  const styleVariables = {
    "--colorDifficulty":
      data.difficulty === "Easy"
        ? "rgb(8, 155, 1)"
        : data.difficulty === "Medium"
        ? "rgb(209, 185, 0)"
        : "rgb(186, 4, 4)",

    "--colorTextareaBack":
      theme === "tomorrow_night_bright" ? "rgb(32, 32, 32)" : "whitesmoke",
    "--colorTextarea": theme === "tomorrow_night_bright" ? "white" : "black",
    "--colorP":
      theme === "tomorrow_night_bright" ? "black" : "rgb(211, 211, 211)",
  } as React.CSSProperties;

  const deleteProblemHandler = () => {
    console.log("deleting");
  };
  return (
    <div className={styles.problem} style={styleVariables}>
      <button onClick={() => setShowWarning(true)}>{deleteSvg}</button>
      {showWarning && (
        <div className={styles.consent}>
          Are you sure to delete?
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span onClick={deleteProblemHandler}>✓</span>{" "}
            <span onClick={() => setShowWarning(false)}>🗙</span>
          </div>
        </div>
      )}
      <p>
        {`${data.no}- ${data.name}`}
        <span>{`${
          data.difficulty !== "" ? "  (" + data.difficulty + ")" : ""
        }`}</span>
      </p>
      <textarea disabled value={data.text}></textarea>
    </div>
  );
};

export default Problem;
