import React from 'react';
import Filters from '../common/filters';

import { PiSlidersHorizontalBold } from "react-icons/pi";
import { IoChevronDownSharp } from "react-icons/io5";
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from '../common/exploreSection';
import { restaurantsData } from './../../data/restaurants';


const deliveryFilters = [
    {
        id: 1,
        title: "Filters", 
        position: "Left",
        icon: <PiSlidersHorizontalBold />
    },
    {
        id: 2,
        title: "Rating: 4.0+", 
    },
    {
        id: 3,
        title: "Pure Veg",
    },
    {
        id: 4,
        title: "Cuisines", 
        position: "Right",
        icon: <IoChevronDownSharp />
    }
]

const Delivery = () => {
    return (
        <div>
            <div className='max-width'>
                <Filters filters={deliveryFilters}></Filters>
            </div>
            <DeliveryCollections></DeliveryCollections>
            <TopBrands></TopBrands>
            <ExploreSection collectionTitle="Delivery Restaurants in Lucknow" datas={restaurantsData} isShowGoldenOffer={false}></ExploreSection>
        </div>
    );
};

export default Delivery;