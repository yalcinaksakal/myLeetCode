import type { NextPage } from "next";
import { useSelector } from "react-redux";
import ProblemList from "../components/ProblemList/ProblemList";
import { RootState } from "../store";

import styles from "../styles/Home.module.scss";
import SignInRequired from "../UI/SignInRequired/SignInRequired";

const MyProblemsPage: NextPage = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.login);

  return isLoggedIn ? (
    <ProblemList list={[]} type="private" />
  ) : (
    <main className={styles.main}>
      <SignInRequired />
    </main>
  );
};

export default MyProblemsPage;
