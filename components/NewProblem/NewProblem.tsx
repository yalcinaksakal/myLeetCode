import styles from "./NewProblem.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const NewProblem: React.FC = () => {
  const [isLeetCode, setIsLC] = useState(true);
  const { displayName, personal } = useSelector(
    (state: RootState) => state.login
  );
  const [formData, setFormData] = useState({
    no: { val: "", isTouched: false },
    title: { val: "", isTouched: false },
    text: { val: "", isTouched: false },
  });
  const [formValidity, setFormValidity] = useState({
    no: false,
    title: false,
    text: false,
    isFormValid: false,
  });

  const typeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const isLC = val === "leet";
    setIsLC(isLC);
    const no = +formData.no.val.trim();
    setFormValidity(prev => ({
      ...prev,
      no: isLC ? no > 0 && no < 1999 : true,
      isFormValid: isLC ? prev.no : prev.text && prev.title,
    }));
  };

  const addHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (formValidity.isFormValid) console.log("added");
  };

  const changeHandler = (field, val) => {
    const value = val.trim();
    const isValid =
      field === "no" ? value > 0 && value < 1999 : value.length > 0;

    const newValidity = { ...formValidity };
    newValidity[field] = isValid;
    newValidity.isFormValid =
      field === "no"
        ? isValid
        : field === "title"
        ? isValid && formValidity.text
        : isValid && formValidity.title;
    setFormValidity(newValidity);

    const newData = { ...formData };
    newData[field] = { val, isTouched: true };
    setFormData(newData);
  };

  const userProblemNo =
    displayName
      .split(" ")
      .map(el => el[0])
      .join("") +
    "-" +
    (personal + 1);

  return (
    <form className={styles.newProblem} onSubmit={addHandler}>
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
          autoFocus
          className={
            formData.no.isTouched && !formValidity.no ? styles.red : ""
          }
          type="text"
          placeholder="LeetCode No [1-1998]"
          value={isLeetCode ? formData.no.val : userProblemNo}
          disabled={!isLeetCode}
          onChange={e => changeHandler("no", e.target.value)}
        />
      </div>
      {!isLeetCode && (
        <>
          <div className={styles.title}>
            <input
              autoFocus
              className={
                formData.title.isTouched && !formValidity.title
                  ? styles.red
                  : ""
              }
              type="text"
              maxLength={150}
              placeholder="Title"
              value={formData.title.val}
              onChange={e => changeHandler("title", e.target.value)}
            />
          </div>
          <div className={styles.text}>
            <textarea
              className={`${
                formData.text.isTouched && !formValidity.text ? styles.red : ""
              } ${styles.problem}`}
              value={formData.text.val}
              onChange={e => changeHandler("text", e.target.value)}
            ></textarea>
          </div>
        </>
      )}
      <button disabled={!formValidity.isFormValid}>Add</button>
    </form>
  );
};

export default NewProblem;
