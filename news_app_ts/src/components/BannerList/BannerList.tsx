import withSkeleton from "../../helpers/hocs/withSkeleton.tsx";
import type { INews } from "../../interfaces/index.ts";
import NewsBanner from "../NewsBanner/NewsBanner.tsx";

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
