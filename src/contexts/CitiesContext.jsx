import { createContext, useState, useEffect } from "react";

const BASE_URL = "http://localhost:8080";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading((prev) => !prev);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data");
      } finally {
        setIsLoading((prev) => !prev);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    {
      try {
        setIsLoading((prev) => !prev);
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data);
      } catch {
        alert("There was an error loading data");
      } finally {
        setIsLoading((prev) => !prev);
      }
    }
  }

  async function createCity(newCity) {
    {
      try {
        setIsLoading((prev) => !prev);
        const res = await fetch(`${BASE_URL}/cities/`, {
          method: "POST",
          body: JSON.stringify(newCity),
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await res.json();
        setCities((cities) => [...cities, data]);
      } catch {
        alert("There was an error creating city");
      } finally {
        setIsLoading((prev) => !prev);
      }
    }
  }

  async function deleteCity(id) {
    {
      try {
        setIsLoading((prev) => !prev);
        await fetch(`${BASE_URL}/cities/${id}`, {
          method: "DELETE",
        });
        setCities((cities) => cities.filter((city) => city.id !== id));
      } catch {
        alert("There was an error deleting city");
      } finally {
        setIsLoading((prev) => !prev);
      }
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesProvider, CitiesContext };
