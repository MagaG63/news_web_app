import { useGetLatestNewsQuery } from "../../../../entities/news/api/newsApi";
import BannerList from "../../../../widgets/news/ui/BannerList/BannerList";
import styles from "./styles.module.css";

export default function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery();

  return (
    <section className={styles.section}>
      <BannerList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}
