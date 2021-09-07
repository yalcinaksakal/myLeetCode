import type { NextPage } from "next";

import styles from "../styles/Home.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import SignInRequired from "../UI/SignInRequired/SignInRequired";

const AddPage: NextPage = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.login);
  return (
    <main className={styles.main}>
      {isLoggedIn ? (
        <h1 className={styles.title}>Add a new problem!</h1>
      ) : (
        <SignInRequired />
      )}
    </main>
  );
};

export default AddPage;
