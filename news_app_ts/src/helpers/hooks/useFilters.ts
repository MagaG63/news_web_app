import { useState } from "react";
import type { IFilters } from "../../interfaces";

export const useFilters = (initFilters: IFilters) => {
  const [filters, setFilters] = useState<IFilters>(initFilters);

  const changeFilter = (key: string, value: string | number | null): void => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
