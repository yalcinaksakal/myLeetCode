import styles from "./NewProblem.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
const NewProblem: React.FC = () => {
  const [isLeetCode, setIsLC] = useState(true);
  const { displayName, personal } = useSelector(
    (state: RootState) => state.login
  );

  const typeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLC(e.target.value === "leet");
  };

  const userProblemNo =
    displayName
      .split(" ")
      .map(el => el[0])
      .join("") +
    "-" +
    (personal + 1);
  console.log(userProblemNo);
  return (
    <form className={styles.newProblem}>
      <div className={styles.radio} onChange={typeChangeHandler}>
        <div>
          <input type="radio" value="leet" name="type" defaultChecked />
          LeetCode
        </div>
        <div>
          <input type="radio" value="personal" name="type" />
          Personal
        </div>
      </div>

      <div className={styles.no}>
        <input
          type="text"
          maxLength={4}
          placeholder="LeetCode No"
          value={isLeetCode ? "" : userProblemNo}
          disabled={!isLeetCode}
          required
        />
      </div>
      {!isLeetCode && (
        <>
          <div className={styles.title}>
            <input type="text" maxLength={150} placeholder="Title" />
          </div>
          <div className={styles.text}>
            <textarea className={styles.problem}></textarea>
          </div>
        </>
      )}
      <button>Add</button>
    </form>
  );
};

export default NewProblem;
