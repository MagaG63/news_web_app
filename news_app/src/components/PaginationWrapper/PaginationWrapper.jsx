import Pagination from "../Pagination/Pagination";

export default function PaginationWrapper({
  top,
  children,
  bottom,
  ...paginationProps
}) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}
