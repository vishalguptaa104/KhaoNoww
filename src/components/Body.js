import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestro, setFilteredRestro] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        // console.log(json);
        const jsonData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(jsonData);
        setFilteredRestro(jsonData);
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
                    // console.log(res);
                    const filteredList = listOfRestaurants.filter((res)=>res.info?.avgRating > 4);
                    // console.log(filteredList)
                    setFilteredRestro(filteredList);
                    // console.log("VISHAL", filteredRestro);
                }}
                >Show Top Rated</button>
                {/* console.log("VISHAL", filteredRestro); */}
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
