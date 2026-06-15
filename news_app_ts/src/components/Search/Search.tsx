import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeywords: (value: string) => void;
}

export default function Search({ keywords, setKeywords }: Props) {

   const { isDark } = useTheme();

  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className={styles.input}
        placeholder="Поиск"
      />
    </div>
  );
}
