import type { NextPage } from "next";

import styles from "../styles/Home.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import SignInRequired from "../UI/SignInRequired/SignInRequired";
import Profile from "../components/Profile/Profile";

const ProfilePage: NextPage = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.login);
  return (
    <main className={styles.main}>
      {isLoggedIn ? <Profile /> : <SignInRequired />}
    </main>
  );
};

export default ProfilePage;
