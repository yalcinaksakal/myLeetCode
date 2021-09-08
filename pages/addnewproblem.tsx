import type { NextPage } from "next";

import styles from "../styles/Home.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import SignInRequired from "../UI/SignInRequired/SignInRequired";
import NewProblem from "../components/NewProblem/NewProblem";

const AddPage: NextPage = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.login);
  return isLoggedIn ? (
    <NewProblem />
  ) : (
    <main className={styles.main}>
      <SignInRequired />
    </main>
  );
};

export default AddPage;
