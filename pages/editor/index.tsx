import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import Editor from "../../components/Editor/Editor";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import SignInRequired from "../../UI/SignInRequired/SignInRequired";
import styles from "../../styles/Home.module.scss";
import { getSolution } from "../../utils/getSolution";
import Spinner from "../../UI/Spinner/Spinner";
import { initialSolution } from "../../models/solution";
const EditorPage: NextPage = () => {
  const { type, no } = useRouter().query;

  const [doesPageExist, setDoesPageExist] = useState(
    (type === "open" || type === "private") && !!no
  );
  const [problemData, setProblemData] = useState(initialSolution);
  const { isLoggedIn } = useSelector((state: RootState) => state.login);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const result = await getSolution(no, type === "open");
      setIsLoading(false);
      if (!result.ok) {
        setDoesPageExist(false);
        return;
      }

      setProblemData(result.data);
    };
    if (!doesPageExist || (type === "private" && !isLoggedIn)) return;

    getData();
  }, [type, isLoggedIn, no]);

  return type === "private" && !isLoggedIn ? (
    <main className={styles.main}>
      <SignInRequired />
    </main>
  ) : isLoading ? (
    <Spinner />
  ) : doesPageExist ? (
    <Editor data={problemData} isPrivate={type === "private"} />
  ) : (
    <h1>This page does not exist</h1>
  );
};

export default EditorPage;
