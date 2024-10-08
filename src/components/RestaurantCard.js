import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
    return (
        <div className='res-cards'>
            {resData.map(item => {
                const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = item.info;
                const deliveryTime = sla ? sla.deliveryTime : 'N/A'; // handle deliveryTime
                // console.log(name);
                

                return (
                    <div key={item.info.id} className='res-card'>
                        <img 
                            className='res-logo'
                            alt="res-logo"
                            src={CDN_URL + cloudinaryImageId}
                        />
                        <h3 className="cuisines">{name}</h3>
                        <h4>Rating: {avgRating}</h4>
                        <h4 className="cuisines">Cuisines: {cuisines.join(', ')}</h4>
                        <h4>Cost: {costForTwo}</h4>
                        <h5>Delivery time: {deliveryTime} mins</h5>
                    </div>
                );
            })}
        </div>
    );
};


export default RestaurantCard;