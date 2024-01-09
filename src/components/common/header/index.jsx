import React from "react";

import { FaLocationDot, FaCaretDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";


import "./header.css";

const Header = () => {
    return (
        <div className="max-width">
            <div className="header-wrapper">
                {/* Website Logo */}
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" className="zomato-logo" />
                <div className="header-right-content">
                    {/* Location & Search Area */}
                    <div className="header-location-search-content">
                        {/* Location */}
                        <div className="location-container">
                            <div className="location-wrapper absolute-center">
                                <FaLocationDot className="location-icon"></FaLocationDot>
                                <input className="location-input" type="text" placeholder="Khulna" />
                            </div>
                            <FaCaretDown className="down-icon"></FaCaretDown>
                        </div>
                        <div className="middle-container"></div>
                        {/* Search */}
                        <div className="search-container">
                            <div className="search-wrapper absolute-center">
                                <FiSearch className="search-icon"></FiSearch>
                                <input className="search-input" type="text" placeholder="Search for restaurant, cuisine or a dish" />
                            </div>
                        </div>
                    </div>
                    {/* Profile Area */}
                    <div className="profile-container absolute-center">
                        <img className="profile-image" src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" alt="" />
                        <div className="profile-name-content">
                            <p className="user-name">Rayhan</p>
                            <IoIosArrowDown className="profile-icon absolute-center"></IoIosArrowDown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;