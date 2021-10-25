import React, {useEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
export default function FoodItems({foodItemsList, updateFoodItemsList}) {
  useEffect(()=> {
    async function getFoodItems() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/foodItems/list`);
        console.log("response", response);
        updateFoodItemsList([...response.data.results]);
      } catch(err) {
        console.log("error occured while getting response", err);
      }
    }
    getFoodItems();
  }, [updateFoodItemsList]);

  function renderFoodItems() {
    console.log("foodItemsList", foodItemsList);
    return foodItemsList.map((fooditem) => {
      return (
        <Link to={`/foodSubItem/${fooditem.name}`} key={fooditem.name}>
        <div
          key={fooditem.name}
          className="h-52 w-52 shadow-2xl border-gray-500 rounded-lg mt-2 flex items-center justify-center flex-col">
            <img src={fooditem.image}
            alt={`image_${fooditem._id}`}
            className="rounded-full h-40 w-40"/>
            <span className="text-base font-medium mt-1">{fooditem.name}</span>
        </div>
        </Link>
      )
    })
  }
  return (
    <div className="FoodItems w-full h-60 flex flex-row justify-center items-center gap-7">
      {renderFoodItems()}
    </div>
  )
}
