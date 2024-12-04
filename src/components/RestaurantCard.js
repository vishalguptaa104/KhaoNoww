import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;
  const deliveryTime = sla ? sla.deliveryTime : "N/A"; // handle deliveryTime

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[190px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg w-[160px] h-[160px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-1 text-lg truncate">{name}</h3>
      <h4 className="py-1">Ratings: {avgRating}</h4>
      <h4 className="font-bold py-1 text-lg truncate">{cuisines.join(", ")}</h4>
      <h4 className="py-1">Price : {costForTwo}</h4>
      <h5 className="py-1">ETA - {deliveryTime} mins</h5>
    </div>
  );
};

//Implemented Higher Order Function to enhance the card with the promoted label
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <Label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </Label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
