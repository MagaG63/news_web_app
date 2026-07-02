export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  handleNextPage: () => void;
  handlePageClick: (page: number) => void;
  handlePrevioustPage: () => void;
}
