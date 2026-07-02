import { useAppDispatch, useAppSelector } from "../../../../app/appStore";
import { useGetNewsQuery } from "../../../../entities/news/api/newsApi";
import { setFilters } from "../../../../entities/news/model/newsSlice";
import PaginationWrapper from "../../../../features/pagination/ui/PaginationWrapper/PaginationWrapper";
import { TOTAL_PAGES } from "../../../../shared/constants/constants";
import useDebounce from "../../../../shared/hooks/useDebounce";
import NewsListWithSkeleton from "../../../../widgets/news/ui/NewsList/NewsList";
import NewsFilters from "../NewsFilters/NewsFilters";
import styles from "./styles.module.css";

export default function NewsByFilters() {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debounceKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debounceKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number + 1 }),
      );
    }
  };

  const handlePrevioustPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number - 1 }),
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: "page_number", value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top={true}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        handlePrevioustPage={handlePrevioustPage}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number || 1}
      >
        <NewsListWithSkeleton isLoading={isLoading} news={news} />
      </PaginationWrapper>
    </section>
  );
}
