import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import styles from "./Modes.module.scss";
import { changeTheme } from "../../../utils/changeMode.utils";
import { changeLang } from "../../../utils/changeMode.utils";
import { loginActions } from "../../../store/login-slice";

const Modes: React.FC<{
  showSaveButton: boolean;
  type: "editor" | "profile";
}> = ({ showSaveButton, type }) => {
  const { isLoggedIn, language, theme } = useSelector(
    (state: RootState) => state.login
  );
  const dispatch = useDispatch();
  const position = type === "editor" ? "0" : "auto";

  const saveHandler = () => {
    console.log("save");
  };

  return (
    <div className={styles.modes} style={{ bottom: position, right: position }}>
      {isLoggedIn && showSaveButton && (
        <button onClick={saveHandler}>Save Code</button>
      )}
      <div>
        <div>Language</div>
        <select
          name="langs"
          onChange={e => {
            dispatch(loginActions.setLang(e.target.value));
            changeLang(e.target.value);
          }}
          value={language}
        >
          <option value="javascript">Javascript</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
      </div>
      <div>
        <div>Theme</div>
        <select
          name="themes"
          onChange={e => {
            dispatch(loginActions.setTheme(e.target.value));
            changeTheme(e.target.value);
          }}
          value={theme}
        >
          <option value="tomorrow_night_bright">Dark</option>
          <option value="tomorrow">Light</option>
        </select>
      </div>
    </div>
  );
};

export default Modes;
