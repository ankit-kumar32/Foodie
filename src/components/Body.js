import { Link } from "react-router-dom";
import { resList } from "../utils/mockdata";
import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import axios from "axios";
const Body=()=>{
  const [listOfRestaurants,setListOfRestaurants]=useState([]);
   const [FilteredRestraunt,setFilteredRestraunt]=useState([]);
   const [searchText,setSearchText]=useState("");

const RestaurantsCardPromoted=withPromotedLabel(RestaurantCard);

    useEffect(()=>{
       fetchData();
   },[])
      
  
  const  fetchData=async()=>{
 
     axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    ).then((res)=> {
      console.log("resData", res)
      setListOfRestaurants(res.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestraunt(res.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } )
    // setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
  }
   const OnlineStatus=useOnlineStatus();
   if(OnlineStatus===false)return (
    <h1>Looks like you're offline!! Please Check Your internet connection</h1>
   );

  console.log(listOfRestaurants);
  if(listOfRestaurants.length===0){
    return <Shimmer/>
    
  }

    return (
       <div className="body">
         <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black p-2 rounded-md" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
            }} ></input>
            <button className="px-4 py-2 bg-gray-400 m-4 font-bold text-lg rounded-lg "
             onClick={()=>{
               //Filter the restraunt cards and update the ui
               //searchtext
              const filtered_res=listOfRestaurants?.filter((res)=>{
                   return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
                })
             setListOfRestaurants(filtered_res);
             setFilteredRestraunt(filtered_res);
            }}>
              search</button>
          </div>

          <div className="search m-4 p-4 flex items-center">
            <button className=" bg-gray-400 px-4 py-2 font-bold text-lg rounded-lg" 
              onClick={() => {
                const filtered_list = listOfRestaurants?.filter((res) => res?.info?.avgRating > 4.0);
             setFilteredRestraunt(filtered_list);
            }}>
            Top Rated Restaurant
          </button>
          </div>
          
  
         </div>
         <div className="flex flex-wrap"> {
             FilteredRestraunt?.map((restaurant)=>
             //dont use index as key rather use unique key id
             <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}> 
 
             <RestaurantCard  resData={restaurant}/>
             </Link>
             )}
         </div>
       </div>
    );
  };
  export default Body;