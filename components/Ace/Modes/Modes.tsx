import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import styles from "./Modes.module.scss";

const Modes: React.FC<{
  onThemeChange: (theme: string) => void;
  onLangChange: (lang: string) => void;
  showSaveButton: boolean;
}> = ({ onThemeChange, onLangChange, showSaveButton }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.login);
  const saveHandler = () => {
    console.log("save");
  };
  return (
    <div className={styles.modes}>
      {isLoggedIn && showSaveButton && (
        <button onClick={saveHandler}>Save</button>
      )}
      <div>Language</div>
      <select name="langs" onChange={e => onLangChange(e.target.value)}>
        <option value="javascript">javascript</option>
        <option value="java">java</option>
        <option value="python">python</option>
      </select>
      <div>Theme</div>
      <select name="langs" onChange={e => onThemeChange(e.target.value)}>
        <option value="tomorrow_night_bright">Dark</option>
        <option value="tomorrow">Light</option>
      </select>
    </div>
  );
};

export default Modes;
