import React from "react";
import "./topRestaurantsCollectionSlider.css";
import PropTypes from "prop-types";
import { IoMdArrowDropright } from "react-icons/io";


const TopRestaurantsCollectionSlider = ({ data }) => {
  return (
          <div className="slider-image-container">
            <img className="slider-image" src={data.image} alt="" />
            <div className="slider-image-overlay"></div>
            <div className="slider-image-text-content">
                <div className="slider-image-title">{data.title}</div>
                <div className="slider-image-places">
                    <span>{data.places}</span>
                    <IoMdArrowDropright className="absolute-center places-arrow-icon"></IoMdArrowDropright>
                </div>
            </div>
          </div>
  );
};

TopRestaurantsCollectionSlider.propTypes = {
  data: PropTypes.object,
};

export default TopRestaurantsCollectionSlider;
