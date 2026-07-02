import { formatTimeAgo } from "../../../../shared/helpers/formatTimeAgo.ts";

import Image from "../../../../shared/ui/Image/Image.tsx";
import type { INews } from "../../model/newsTypes.ts";
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
