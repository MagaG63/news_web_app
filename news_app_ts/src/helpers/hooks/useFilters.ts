import { useState } from "react";

export const useFilters = (initFilters) => {
  const [filters, setFilters] = useState({
    initFilters,
  });

  const changeFilter = (key, value) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
