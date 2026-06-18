
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import useDebounce from "../../helpers/hooks/useDebounce";

import { useFilters } from "../../helpers/hooks/useFilters";
import { useGetNewsQuery } from "../../store/services/newsApi";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./styles.module.css";

export default function NewsByFilters() {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: undefined,
    keywords: "",
  });

  const debounceKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debounceKeywords,
  });
  console.log(data);


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

  const handlePageClick = (pageNumber: number) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <PaginationWrapper
        top={true}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        handlePrevioustPage={handlePrevioustPage}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number || 1}
      >
        <NewsList isLoading={isLoading} news={data && data.news} />
      </PaginationWrapper>
    </section>
  );
}
