import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import Editor from "../../components/Editor/Editor";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import SignInRequired from "../../UI/SignInRequired/SignInRequired";
import styles from "../../styles/Home.module.scss";
import { getSolution } from "../../utils/getSolution";
const EditorPage: NextPage = () => {
  const { type, no } = useRouter().query;

  const [doesPageExist, setDoesPageExist] = useState(
    type === "open" || type === "private"
  );
  const { isLoggedIn } = useSelector((state: RootState) => state.login);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const result = await getSolution(no, type === "open");
      setIsLoading(false);
      console.log(result);
    };
    if (!doesPageExist || (type === "private" && !isLoggedIn)) return;
    setIsLoading(true);
    getData();
  }, [type, isLoggedIn, no]);

  return type === "private" && !isLoggedIn ? (
    <main className={styles.main}>
      <SignInRequired />
    </main>
  ) : doesPageExist ? (
    <Editor />
  ) : (
    <h1>This page does not exist</h1>
  );
};

export default EditorPage;
