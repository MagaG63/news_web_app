import type { INews } from "../../../../entities/news/model/newsTypes";
import NewsBanner from "../../../../entities/news/ui/NewsBanner/NewsBanner";
import withSkeleton from "../../../../shared/hocs/withSkeleton";
import styles from "./styles.module.css";

interface Props {
  banners?: INews[] | undefined | null;
}

function BannerList({ banners }: Props) {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
}

const BannerListWithSkeleton = withSkeleton<Props>(
  BannerList,
  "banner",
  10,
  "row",
);

export default BannerListWithSkeleton;
