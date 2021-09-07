import ProfileImg from "../../UI/ProfileImg/ProfileImg";

import styles from "./Profile.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Modes from "../Ace/Modes/Modes";

const Profile: React.FC = () => {
  const credentials = useSelector((state: RootState) => state.login);

  return (
    <div className={styles.profile}>
      <div>
        <ProfileImg type="page" isPageActive={true} />
        <h3>{credentials.displayName}</h3>
      </div>
      <div className={styles.status}>
        <h3>Status</h3>
        <h4>Total:{" " + credentials.total}</h4>
        {credentials.personal !== 0 && (
          <h5>Personal:{" " + credentials.personal}</h5>
        )}
        {credentials.total !== credentials.personal && (
          <h5>LeetCode:{" " + (credentials.total - credentials.personal)}</h5>
        )}
        {credentials.difficult !== 0 && (
          <p>Difficult:{" " + credentials.difficult}</p>
        )}
        {credentials.medium !== 0 && <p>Medium:{" " + credentials.medium}</p>}
        {credentials.easy !== 0 && <p>Easy:{" " + credentials.easy}</p>}
      </div>
      <div>
        <h3>Code editor preferences</h3>
        <Modes showSaveButton={false} />
      </div>
    </div>
  );
};

export default Profile;
