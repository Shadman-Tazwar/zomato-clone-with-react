import React from 'react';
import Slider from "react-slick";
import './topBrands.css';
import PreviousButton from '../../common/carousel/previousButton';
import NextButton from '../../common/carousel/nextButton';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const topBrandsItems = [
    {
        id: 1,
        title: "Burger King",
        deliveryTime: "23 min",
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187772.png"
    },
    {
        id: 2,
        title: "KFC",
        deliveryTime: "18 min",
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433084.png"
    },
    {
        id: 3,
        title: "Green Chillyz",
        deliveryTime: "23 min",
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/19f79b1a64b30f8a3ba58e540f8bf218_1581917577.png"
    },
    {
        id: 4,
        title: "Pizza Hut",
        deliveryTime: "29 min",
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/7059708ecf9568fc43490b7dad4c8f85_1672381496.png"
    },
    {
        id: 5,
        title: "Oberai Bakers & Cafe",
        deliveryTime: "25 min",
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/dcd6ea23e8e4acbb694c9d3310db58bf_1611317285.png"
    },
    {
        id: 6,
        title: "WOW! Momo",
        deliveryTime: "19 min",
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/3a58b67479fd290ff96996002438736e_1672389470.png"
    },
    {
        id: 7,
        title: "Mio Amore",
        deliveryTime: "19 min",
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/7013fa5250ecaba145d9437a3ba9f1ec_1492582809.png"
    },
    {
        id: 8,
        title: "Shirose Restaurant & Sweets",
        deliveryTime: "28 min",
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/cc5cd77a737e2d2f624aad56e17a5c74_1699027697.png"
    },
    {
        id: 9,
        title: "Asia Seven – Sizzling Chinese",
        deliveryTime: "29 min",
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/b5223f1a6a4e26b7c8bd7797d2b9f05c_1633120583.png"
    },
    {
        id: 10,
        title: "The Belgian Waffle Co.",
        deliveryTime: "32 min",
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/e47dec3eb2950cde399b62b48c5645f6_1675832883.png"
    }
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PreviousButton />
};

const TopBrands = () => {
    return (
        <div className='top-brands max-width'>
            <div className='header-title top-brands-title'>Top brands for you</div>
            <Slider {...settings}>
                {
                    topBrandsItems.map((item) => {
                        return <div key={item.id} className='top-brands-container'>
                            <div className='top-brands-image-content'>
                                <img className='top-brands-image' src={item.image} alt={item.title} />
                            </div>
                            <div className='top-brands-text-content'>
                                <div className='top-brands-name absolute-center'>
                                    {item.title}
                                </div>
                                <div className='top-brands-delivery-time absolute-center'>
                                    {item.deliveryTime}
                                </div>
                            </div>
                        </div>
                    })
                }
            </Slider>
        </div>
    );
};

export default TopBrands;