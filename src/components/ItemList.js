import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

 const ItemList=({items})=>{
   //console.log(items);
   
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
      //dispatch an action
     // console.log(item);
      dispatch(addItem(item));
   }

   const handleDeleteItem=(item)=>{
    //dispatch an action
   // console.log(item);
    dispatch(removeItem(item));
 }

   return (
        <div>
           {items.map((item,index)=>
             <div key={item.card.info.id+index} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"> 
            
               <div className="w-9/12">  
                <div className="py-2">
                 <span>{item.card.info.name} </span>
                 <span>- ₹{item.card.info.price ? item.card.info.price/100:item.card.info.defaultPrice/100}</span>
               </div>
               <p className="text-xs"> {item.card.info.description} </p>
               </div>
             
            <div className="w-3/12 p-4">
               <div className="absolute flex  p-0 m-0">
                
                 <button className=" p-2 ml-2 rounded-lg bg-green-900 text-white shadow-lg m-auto" 
                   onClick={()=>handleAddItem(item)}
                 >
                  +
                 </button> 

                 <button className="p-2 rounded-lg bg-red-700 text-white shadow-lg m-auto" 
                   onClick={()=>handleDeleteItem(item)}
                 >
                  -
                 </button> 

               </div>
               <img src={CDN_URL+item.card.info.imageId} />
            </div>

       </div>)}
       
       </div>
   )}

export default ItemList;

