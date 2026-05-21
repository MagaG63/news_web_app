import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";
import NewsBanner from "../NewsBanner/NewsBanner.jsx";

import styles from "./styles.module.css";

function BannerList({ banners }) {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
}

const BannerListWithSkeleton = withSkeleton(BannerList, "banner", 10, "row");

export default BannerListWithSkeleton;
