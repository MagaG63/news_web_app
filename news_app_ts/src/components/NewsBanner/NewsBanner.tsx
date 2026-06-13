import { formatTimeAgo } from "../../helpers/formatTimeAgo.ts";
import type { INews } from "../../interfaces/index.ts";
import Image from "../Image/Image.tsx";
import styles from "./styles.module.css";

interface Props {
  item: INews;
}

function NewsBanner({ item }: Props) {
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

export default NewsBanner;
