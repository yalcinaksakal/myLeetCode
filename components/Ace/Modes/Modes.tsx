import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import styles from "./Modes.module.scss";
import { changeTheme } from "../../../utils/changeMode.utils";
import { changeLang } from "../../../utils/changeMode.utils";
import { loginActions } from "../../../store/login-slice";

const Modes: React.FC<{
  showSaveButton: boolean;
}> = ({ showSaveButton }) => {
  const { isLoggedIn, language, theme, uid } = useSelector(
    (state: RootState) => state.login
  );
  const dispatch = useDispatch();

  const saveHandler = () => {
    console.log("save");
  };

  return (
    <div className={styles.modes}>
      {isLoggedIn && showSaveButton && (
        <button onClick={saveHandler}>Save Code</button>
      )}
      <div>Language</div>
      <select
        name="langs"
        onChange={e => {
          dispatch(loginActions.setLang(e.target.value));
          changeLang(e.target.value, uid);
        }}
        value={language}
      >
        <option value="javascript">javascript</option>
        <option value="java">java</option>
        <option value="python">python</option>
      </select>
      <div>Theme</div>
      <select
        name="themes"
        onChange={e => {
          dispatch(loginActions.setTheme(e.target.value));
          changeTheme(e.target.value, uid);
        }}
        value={theme}
      >
        <option value="tomorrow_night_bright">Dark</option>
        <option value="tomorrow">Light</option>
      </select>
    </div>
  );
};

export default Modes;
