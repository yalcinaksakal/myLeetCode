import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Prblm } from "../../models/prblmItem";
import { RootState } from "../../store";
import { loginActions } from "../../store/login-slice";
import { deleteSvg } from "../../svg/delete";
import { deletePrblm } from "../../utils/deleteSaveProblem";
import styles from "./Problem.module.scss";

const Problem: React.FC<{ data: Prblm; isPrivate: boolean }> = ({
  data,
  isPrivate,
}) => {
  const { theme, total, personal, hard, easy, medium } = useSelector(
    (state: RootState) => state.login
  );
  const dispatch = useDispatch();
  const [showWarning, setShowWarning] = useState(false);
  const router = useRouter();
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
    setShowWarning(false);
    const newStatistics = { total, easy, medium, hard, personal };
    newStatistics["total"]--;
    if (data.isLC) newStatistics[data.difficulty.toLocaleLowerCase()]--;
    else newStatistics["personal"]--;

    //delete
    deletePrblm(data.no, newStatistics);
    //update store
    dispatch(loginActions.setStatistics(newStatistics));
    router.replace("/myproblems");
  };
  return (
    <div className={styles.problem} style={styleVariables}>
      {isPrivate && (
        <button onClick={() => setShowWarning(true)}>{deleteSvg}</button>
      )}
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
