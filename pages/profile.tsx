import type { NextPage } from "next";
import ProfileImg from "../UI/ProfileImg/ProfileImg";

import styles from "../styles/Home.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import SignInRequired from "../UI/SignInRequired/SignInRequired";

const Profile: NextPage = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.login);
  return (
    <main className={styles.main}>
      {isLoggedIn ? (
        <>
          <ProfileImg type="page" isPageActive={false} />
          <h1 className={styles.title}>Your Profile</h1>
        </>
      ) : (
        <SignInRequired />
      )}
    </main>
  );
};

export default Profile;
