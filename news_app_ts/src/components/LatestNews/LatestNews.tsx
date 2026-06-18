import BannerList from "../BannerList/BannerList";
import styles from "./styles.module.css";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

export default function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery();

  return (
    <section className={styles.section}>
      <BannerList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}
