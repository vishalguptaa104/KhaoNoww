import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = () => {

    const resInfo = useRestaurantMenu();

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
               {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} - Rs.
                    {item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>

            ))}
            </ul>
        </>
    )
}

export default RestaurantMenu;