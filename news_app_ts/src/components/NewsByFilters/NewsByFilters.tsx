import { getNews } from "../../api/apiNews";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useTheme } from "../../context/ThemeContext";
import useDebounce from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import type { NewsApiResponse, ParamsType } from "../../interfaces";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./styles.module.css";



export default function NewsByFilters() {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debounceKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debounceKeywords,
  });

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
      <NewsFilters
        filters={filters}
        changeFilter={changeFilter}
      />

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
