import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Card.css";
import { BiMessageSquareDetail } from "../../node_modules/react-icons/bi";
import { MdFavoriteBorder } from "../../node_modules/react-icons/md";

const Search = () => {
  const { name } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const [item, setItem] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const { meals } = await data.json();
    setItem(meals);
    console.log(meals);
  };

  return (
    <>
      <div className="flex flex-wrap gap-14 mt-7 justify-center p-5">
        {item.map((el) => {
          return (
            <div className="card relative">
              <img
                className=" h-[250px] rounded-lg "
                src={el.strMealThumb}
                alt=""
              />

              <div className="detail text-gray-700 font-bold bg-white rounded-lg h-[40px] w-[125px] top-[60%] right-0">
                For Detail <BiMessageSquareDetail />
              </div>

              <div className="detail text-gray-700 font-bold bg-white rounded-lg h-[40px] w-[125px] top-[20%] left-0">
                For Order
                <MdFavoriteBorder />
              </div>
              <h2 className=" text-[12px] font-bold">{el.strMeal}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
