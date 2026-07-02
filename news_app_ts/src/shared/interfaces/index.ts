export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";

export interface IFilters {
  page_number: number;
  category: string | undefined;
  page_size: number;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;