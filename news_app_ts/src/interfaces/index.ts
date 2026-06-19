export interface INews {
  author: string;
  category: string[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export interface CategoriesApiResponse {
  categories: string[];
  description: string;
  status: string;
}

export type SkeletonType = 'banner' | 'item'
export type DirectionType = 'row' | 'column'


export interface IFilters {
  page_number: number;
  category: string | undefined;
  page_size: number;
  keywords: string;
}

export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  handleNextPage: () => void;
  handlePageClick: (page: number) => void;
  handlePrevioustPage: () => void;

}

export type ParamsType = Partial<IFilters>;

export interface IBanner {
  description: string;
  image: string;
  id: string;
  title: string;
  url: string | null | undefined;
}
