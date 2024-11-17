import { useState, useEffect } from "react";

const useRestaurantData = () => {
    
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestro, setFilteredRestro] = useState([]);
    
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        const jsonData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(jsonData || []);
        setFilteredRestro(jsonData || []);
    } 
    
    useEffect(() => {
        fetchData();
    } , [])

    return {listOfRestaurants, filteredRestro, setFilteredRestro};
}

export default useRestaurantData;