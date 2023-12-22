 //import { useState,useEffect } from "react";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestaurantMenu=()=>{
     //const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
   // console.log(param)
   // console.log(restid);

   const resInfo=useRestaurantMenu(resId);
  //   useEffect(()=>{
  //      fetchMenu();
  //    },[]);
  //   const resId=126286;
  // const fetchMenu=async()=>{
  //   const data = await fetch(`https://foodishhub.live/api/menu?id=${resId}`);
  //   const json = await data.json();
  
  //   console.log(json);
  //   setResInfo(json.data);
  // }

  const [showIndex,setShowIndex]=useState(null);

  if(resInfo===null)return <Shimmer/>
   //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;

 //const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards


const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
//console.log(itemCards);

const categories =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=>c?.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
//console.log(categories);
    return (
        <div className="text-center">
          <h1 className="font-bold my-6 text-2xl">{name}</h1>

          <p className="font-bold text-lg">{cuisines.join(", ")}-{costForTwoMessage}</p>

          {categories.map((category,index)=>{
            //controlled component
            return <RestaurantCategory 
            key={category.card.card.title} 
            data={category?.card?.card}
            showItems={index===showIndex ? true:false}
            setShowIndex={()=>setShowIndex(index)}
            />
          })}
          
         </div>
    );
}

export default RestaurantMenu;