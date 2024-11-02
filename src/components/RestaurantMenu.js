import {useEffect, useState} from "react";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=21001&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    useEffect(()=>{
       fetchMenu();
    },[]);

    const {
        name= "Default Restaurant Name",
        cuisines = ["Unavailable"],
        costForTwoMessage = "Price Not Available"
    } = resInfo?.cards[2]?.card?.card?.info || {};

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
    console.log(itemCards)

    return (resInfo === null) ? <Shimmer /> : (
        <>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h3>Menu</h3>
            <ul>
                <li>Burger</li>
                <li>Pizza</li>
                <li>Coffee</li>
            </ul>
        </>
    )
}

export default RestaurantMenu;