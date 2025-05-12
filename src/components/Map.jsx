import { useSearchParams } from "react-router";
import styles from "@styles/Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat"),
    lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      Map
      <h1>
        Position {lat}, {lng}
      </h1>
    </div>
  );
}

export default Map;
