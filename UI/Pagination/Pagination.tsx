import styles from "./Pagination.module.scss";

import pageArrConstructor from "../../helpers/pageArrConstructor";
const Pagination: React.FC<{ numberOfPages: number; currentPage: number }> = ({
  numberOfPages,
  currentPage,
}) => {
  const pageArr = [...pageArrConstructor(numberOfPages, currentPage)];
  console.log(pageArr);
  return (
    <div className={styles.pagination}>
      <div className={styles.page}>{"<"}</div>
      {pageArr.map((page, i) => (
        <div
          className={`${styles.page} ${
            page === currentPage ? styles.active : ""
          } ${page === "..." ? styles.disabled : ""}`}
          key={i}
        >
          {page}
        </div>
      ))}
      {/* <div className={styles.page}>1</div>
      <div className={styles.page}>...</div>
      <div className={styles.page}>36</div>
      <div className={styles.page}>48</div>
      <div className={styles.page}>54</div>
      <div className={styles.page}>...</div>
      <div className={styles.page}>77</div> */}
      <div className={styles.page}>{">"}</div>
    </div>
  );
};
export default Pagination;
