import { useRouter } from "next/router";

import styles from "./NoItems.module.scss";

const NoItems: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <p>You do not have any problems in your folder.</p>
      <button onClick={() => router.push("/addnewproblem")}>Add</button>
    </div>
  );
};

export default NoItems;
