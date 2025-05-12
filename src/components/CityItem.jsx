import { Link } from "react-router";
import { useFormatDate } from "@hooks";
import styles from "@styles/CityItem.module.css";
import { useCities } from "@hooks";

export default function CityItem({ city }) {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  const format = useFormatDate(date);

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity.id ? styles["cityItem--active"] : ""}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({format})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
