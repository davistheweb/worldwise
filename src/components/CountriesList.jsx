import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from './CountryItem';
import styles from "./CountriesList.module.css";

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on the city on the map" />
    );
    const countries = [];
  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountriesList;
