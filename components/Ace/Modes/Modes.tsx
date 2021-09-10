import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import styles from "./Modes.module.scss";
import { changeTheme } from "../../../utils/changeMode.utils";
import { changeLang } from "../../../utils/changeMode.utils";
import { loginActions } from "../../../store/login-slice";
import { useState } from "react";
import SpinnerDots from "../../../UI/Spinner/SpinnerDots";

const Modes: React.FC<{
  showSaveButton: boolean;
  type: "editor" | "profile";
  onSave: () => Promise<boolean> | null;
}> = ({ showSaveButton, type, onSave }) => {
  const { isLoggedIn, language, theme } = useSelector(
    (state: RootState) => state.login
  );
  const dispatch = useDispatch();
  const positionRight = type === "editor" ? "20px" : "auto";
  const positionBottom = type === "editor" ? "0" : "auto";
  const [isSaving, setIsSaving] = useState(false);
  return (
    <div
      className={styles.modes}
      style={{ bottom: positionBottom, right: positionRight }}
    >
      {isLoggedIn && showSaveButton && (
        <button
          className={isSaving ? styles.saving : ""}
          disabled={isSaving}
          onClick={async () => {
            setIsSaving(true);
            await onSave();
            setIsSaving(false);
          }}
        >
          {isSaving ? (
            <>
              <span>Saving</span> <SpinnerDots />
            </>
          ) : (
            "Save Code"
          )}
        </button>
      )}
      {isLoggedIn && (showSaveButton || type === "profile") && (
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
      )}
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
