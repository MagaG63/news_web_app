import type { IFilters } from "../../interfaces";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

export default function NewsFilters({ filters, changeFilter }: Props) {
  const { data: dataCategories } = useGetCategoriesQuery();

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
