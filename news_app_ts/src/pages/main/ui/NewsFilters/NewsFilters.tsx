import { useAppDispatch } from "../../../../app/appStore";
import { useGetCategoriesQuery } from "../../../../entities/category/api/categoryApi";
import { setFilters } from "../../../../entities/news/model/newsSlice";
import Categories from "../../../../features/category/ui/Categories/Categories";
import Search from "../../../../features/search/ui/Search/Search";
import Slider from "../../../../features/slider/ui/Slider/Slider";
import type { IFilters } from "../../../../shared/interfaces";
import styles from "./styles.module.css";

interface Props {
  filters: IFilters;
}

export default function NewsFilters({ filters }: Props) {
  const { data: dataCategories } = useGetCategoriesQuery();
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
            categories={dataCategories.categories}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
}
