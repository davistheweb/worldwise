import { useFormatDate } from "@hooks";
import styles from "@styles/CityItem.module.css";
export default function CityItem({ city }) {
  const { cityName, emoji, date } = city;

  const format = useFormatDate(date);

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({format})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}
