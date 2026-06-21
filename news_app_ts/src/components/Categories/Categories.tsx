import { forwardRef, type ForwardedRef } from "react";
import styles from "./styles.module.css";

interface Props {
  categories: string[];
  setSelectedCategory: (category: string | undefined) => void;
  selectedCategory: string | undefined;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className={styles.categories} ref={ref}>
        <button
          onClick={() => setSelectedCategory(undefined)}
          className={!selectedCategory ? styles.active : styles.item}
          disabled={selectedCategory === undefined}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category ? styles.active : styles.item
            }
            disabled={selectedCategory === category}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    );
  },
);

export default Categories;
