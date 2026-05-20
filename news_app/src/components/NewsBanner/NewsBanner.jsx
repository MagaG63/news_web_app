import { formatTimeAgo } from "../../helpers/formatTimeAgo.js";
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";
import Image from "../Image/Image.jsx";
import styles from "./styles.module.css";

function NewsBanner({ item }) {
  return (
    <div className={styles.display}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);

export default NewsBannerWithSkeleton;
