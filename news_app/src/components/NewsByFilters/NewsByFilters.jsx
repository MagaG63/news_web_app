import { TOTAL_PAGES } from "../../constants/constants";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.module.css";

export default function NewsByFilters({
  filters,
  changeFilter,
  isLoading,
  data,
}) {
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePrevioustPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        handlePrevioustPage={handlePrevioustPage}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
      <NewsList isLoading={isLoading} news={data && data.news} />
    </section>
  );
}
