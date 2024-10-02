import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();
        console.log(json);
        const jsonData = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurants(jsonData);
        
    }

    return (
        <div className='body'>
            <div className="filter">
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4);
                    // console.log(filteredList)
                    setListOfRestaurants(filteredList);
                }}
                >Show Top Rated</button>
            </div>
            <div className='search'>
                Search Bar
            </div>
            <div className='restro-container'>
                {/*can use map here to send data in chunks*/}
                <RestaurantCard resData = {listOfRestaurants}/>
            </div>
        </div>
    )
};

export default Body;
