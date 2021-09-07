import type { NextPage } from "next";
import ProfileImg from "../components/ProfileImg/ProfileImg";

import styles from "../styles/Home.module.scss";

const Profile: NextPage = () => {
  return (
    <>
      <ProfileImg type="page" />
      <h1 className={styles.title}>Your Profile</h1>
    </>
  );
};

export default Profile;
