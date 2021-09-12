import styles from "./Pagination.module.scss";

import pageArrConstructor from "../../helpers/pageArrConstructor";
import { useRouter } from "next/router";
const Pagination: React.FC<{
  numberOfPages: number;
  currentPage: number;
  path: string;
  filter: string | string[];
}> = ({ numberOfPages, currentPage, path, filter }) => {
  const pageArr = [...pageArrConstructor(numberOfPages, currentPage)];
  const router = useRouter();
  const clickHandler = (page: string) => {
    router.push(
      `${path}?page=${page}${filter === "All" ? "" : `&filter=${filter}`}`
    );
  };

  return (
    <div className={styles.pagination}>
      <div
        className={`${styles.page}  ${currentPage > 1 ? "" : styles.disabled}`}
        onClick={() => clickHandler("" + (currentPage - 1))}
      >
        {"<"}
      </div>
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

      <div
        className={`${styles.page}  ${
          currentPage < numberOfPages ? "" : styles.disabled
        }`}
        onClick={() => clickHandler("" + (currentPage + 1))}
      >
        {">"}
      </div>
    </div>
  );
};
export default Pagination;
