import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const getStatus = useOnlineStatus();
    const [searchText, setSearchText] = useState("");
    const { listOfRestaurants, filteredRestro, setFilteredRestro } = useRestaurantData();

    if(getStatus === false){
        return(
            <h1>You are offline!</h1>
        )
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className="filter">
                <div className="search">
                    <input type="text" placeholder="Search Restaurant" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={()=>{
                         const trimmedSearchText = searchText.trim();  // Remove whitespace from both ends
                         if (trimmedSearchText === "") {
                           // If searchText is empty or only contains spaces, reset to the full list
                           setFilteredRestro(listOfRestaurants);
                         } else {
                        const filteredRestros = listOfRestaurants.filter((item) => { return item.info?.name?.toLowerCase().includes(trimmedSearchText.toLowerCase());
                        });
                        setFilteredRestro(filteredRestros);
                    }
                                              
                    }} >Search</button>
                </div>

                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter((res)=>res.info?.avgRating > 4);
                    setFilteredRestro(filteredList);
                }}
                >Show Top Rated</button>
            </div>
            
            <div className='restro-container'>  
                {filteredRestro.map((restaurant) => ( 
                    <Link key={restaurant.info.id} 
                    to={"/restaurants/"+restaurant.info.id}
                    style={{textDecoration: 'none'}}>
                        <RestaurantCard resData={restaurant?.info} /></Link>
                ))}      
            </div>
        </div>
    )
};

export default Body;
