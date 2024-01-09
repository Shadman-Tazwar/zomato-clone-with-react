import React from 'react';
import TopRestaurantsCollection from '../common/topRestaurantsCollection';
import { PiSlidersHorizontalBold } from "react-icons/pi";
import Filters from '../common/filters';
import Offer from '../common/offer';
import ExploreSection from '../common/exploreSection';
import { nightLifeExploreList } from '../../data/nightLifeRestaurants';

const nightLifeRestaurantsCollectionList = [
    {
        id: 1,
        image: "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120448.jpg?output-format=webp",
        title: "Must-visit Legendary Places",
        places: "12 Places"
    },
    {
        id: 2,
        image: "https://b.zmtcdn.com/data/collections/864bffea0db8ff11ac0a98fa7b41eaf3_1702545897.jpg?output-format=webp",
        title: "Best in Lucknow",
        places: "29 Places"
    },
    {
        id: 3,
        image: "https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252826.jpg?output-format=webp",
        title: "Best Insta-worthy Places",
        places: "7 Places"
    },
    {
        id: 4,
        image: "https://b.zmtcdn.com/data/collections/54a38c33ce8c62c7754e3f0b2fa6eb60_1695898538.png?output-format=webp",
        title: "Premium Coffee Shops",
        places: "12 Places"
    },
    {
        id: 5,
        image: "https://b.zmtcdn.com/data/collections/aef289b722dbc3e665d80059df816a0d_1675239659.jpg?output-format=webp",
        title: "Places for Smoky Kebabs",
        places: "5 Places"
    },
    {
        id: 6,
        image: "https://b.zmtcdn.com/data/collections/eb98e6031b99817fc6a82712b99067f0_1696923344.png?output-format=webp",
        title: "Best Bars & Pubs",
        places: "6 Places"
    },
    {
        id: 7,
        image: "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1675239896.jpg?output-format=webp",
        title: "Serene Rooftop Places",
        places: "8 Places"
    },
    {
        id: 8,
        image: "https://b.zmtcdn.com/data/collections/717d8fa8201dd008d302d0717b99fb03_1703161711.png?output-format=webp",
        title: "New Year's Special Restaurants",
        places: "10 Places"
    }
];

const nightLifeFilters = [
    {
        id: 1,
        title: "Filters", 
        position: "Left",
        icon: <PiSlidersHorizontalBold />
    },
    {
        id: 2,
        title: "Gold",
        position: "Left",
        icon: "https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png"
    },
    {
        id: 3,
        title: "Rating: 4.0+", 
    },
    {
        id: 4,
        title: "Pubs & Bars", 
    }
];

const Nightlife = () => {
    return (
        <div>
            <TopRestaurantsCollection data={nightLifeRestaurantsCollectionList}></TopRestaurantsCollection>
            <div className='max-width'>
                <Filters filters={nightLifeFilters}></Filters>
                <Offer></Offer>
                <ExploreSection collectionTitle="Trending dining restaurants in Lucknow" datas={nightLifeExploreList} isShowGoldenOffer={true}></ExploreSection>
            </div>
        </div>
    );
};

export default Nightlife;