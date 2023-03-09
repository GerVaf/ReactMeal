import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IoLogoYoutube} from '../../node_modules/react-icons/io'

const Detail = () => {
  const { id } = useParams();

  const [Detail, setDetail] = useState({});

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    setDetail(meals[0]);
    console.log(meals[0]);
  };

  return (
    <>
      <div className=" flex-wrap w-[80%] h-screen mt-10 items-center flex mx-auto gap-16">
        <img className=" h-[400px]" src={Detail.strMealThumb} alt="" />
        <div className=" gap-4 flex flex-col">
          <h1 className=" text-gray-600 font-bold text-xl ">Name : {Detail.strMeal}</h1>
          <h2 className=" text-gray-600 font-bold text-md">Type : {Detail.strCategory}</h2>
          <p className=" text-gray-600 font-bold text-sm">From : {Detail.strArea}</p>
          <p className=" text-gray-800 ">{Detail.strInstructions}</p>
          <a href={Detail.strYoutube} className=" text-red-600 text-4xl"><IoLogoYoutube/></a>
        </div>
      </div>
    </>
  );
};

export default Detail;
