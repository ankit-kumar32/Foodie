import { CDN_URL } from "../utils/constants";

const styleCard={
    backgroundColor:"#f0f0f0"
 };
const RestaurantCard=(props)=>{
    const {resData}=props;
  //** Optional chaining */

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    
  }=resData?.info;

// 
    return (
      <div className="m-4 p-4 w-60  rounded-lg bg-gray-200 hover:bg-gray-500" >
  
      <img className="rounded-lg" alt="res-logo" src={CDN_URL+ cloudinaryImageId}
      />
      
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="font-medium">{cuisines.join(", ")}</h4>
      <h4 className="font-medium">{avgRating}</h4>
    
      <h4 className="font-medium">{costForTwo} </h4>
      
    </div>
    )      
  };

//higher order component 
//input - RestaurantCard =>RestaurantsCardPromoted

export const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
      return (
              <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
              </div>
      );
  };
}

  export default RestaurantCard;