import styles from "./Pagination.module.scss";

import pageArrConstructor from "../../helpers/pageArrConstructor";
const Pagination: React.FC<{ numberOfPages: number; currentPage: number }> = ({
  numberOfPages,
  currentPage,
}) => {
  const pageArr = [...pageArrConstructor(numberOfPages, currentPage)];

  const clickHandler = (page: string) => {
    console.log("clicked:" + page);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.page}>{"<"}</div>
      {pageArr.map((page, i) => (
        <div
          className={`${styles.page} ${
            page === currentPage ? styles.active : ""
          } ${page === "..." ? styles.disabled : ""}`}
          key={i}
          onClick={() => +page !== currentPage && clickHandler("" + page)}
        >
          {page}
        </div>
      ))}

      <div className={styles.page}>{">"}</div>
    </div>
  );
};
export default Pagination;
