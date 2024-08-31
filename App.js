import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv86s5jLvuvNk7tN5cWRz-cq90TxdOeIpnEw&s' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return (
        <div className='res-card'>
            <h3>Meghana Foods</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                Search Bar
            </div>
            <div className='restro-container'>
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);