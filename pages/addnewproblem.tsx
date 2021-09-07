import type { NextPage } from "next";

import styles from "../styles/Home.module.scss";

const AddPage: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Add a new problem!</h1>
      </main>
    </>
  );
};

export default AddPage;
