import React, { useEffect, useState } from "react";
import Card from "./Card";

const Meal = () => {
  const [Meal, setMeal] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const { meals } = await api.json();

    setMeal(meals);
    // console.log(meals);
  };

  return (
    <>
      <div className=" flex flex-wrap gap-14 mt-7 justify-center p-5">
        {Meal.map((el) => {
          return (
            <Card key={el.idMeal} name={el.strMeal} img={el.strMealThumb} id={el.idMeal} />
          );
        })}
      </div>
    </>
  );
};

export default Meal;
