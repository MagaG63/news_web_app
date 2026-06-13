import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import type { CategoriesApiResponse, IFilters } from "../../interfaces";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

export default function NewsFilters({ filters, changeFilter }: Props) {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories,
  );

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
            categories={dataCategories.categories}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
}
