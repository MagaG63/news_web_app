import type React from "react";
import type { IPaginationProps } from "../../model/paginationTypes";
import Pagination from "../Pagination/Pagination";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

export default function PaginationWrapper({
  top,
  children,
  bottom,
  ...paginationProps
}: Props & IPaginationProps) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}
