import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import useHttps from "./hooks/useHttps";
import Error from "./UI/Error";

const requestConfig = {};

export default function Meals() {
  const {
    data: mealsImages,
    isLoading,
    error,
  } = useHttps("http://localhost:3000/meals", []);

  if (isLoading) {
    return <p className="center">Fetching Meals...</p>;
  }

  if (error){
    return(<Error title="loading Error" msg={error}>Expecting this</Error>);
  }

  return (
    <ul id="meals">
      {mealsImages.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
