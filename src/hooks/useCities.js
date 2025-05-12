import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";
export const useCities = () => {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("Cities context was used outside the cities provider");

  return context;
};
