import { forwardRef } from "react";
import styles from "./styles.module.css";

const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectedCategory }, ref) => {
    return (
      <div className={styles.categories} ref={ref}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? styles.active : styles.item}
          disabled={selectedCategory === null}
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
