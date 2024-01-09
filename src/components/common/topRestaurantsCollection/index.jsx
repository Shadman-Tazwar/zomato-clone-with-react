import React from "react";
import "./topRestaurantsCollection.css";
import { IoMdArrowDropright } from "react-icons/io";
import TopRestaurantsCollectionSlider from "./topRestaurantsCollectionSlider";
import PropTypes from "prop-types";

import NextButton from "./../carousel/nextButton/index";
import PreviousButton from "../carousel/previousButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextButton></NextButton>,
  prevArrow: <PreviousButton></PreviousButton>,
};

const TopRestaurantsCollection = ({ data }) => {
  return (
    <div className="top-restaurants-collection-container">
      <div className="max-width">
        <div className="top-restaurants-collection-header-content">
          <div className="top-restaurants-collection-header header-title">
            Collections
          </div>
          <div className="top-restaurants-collection-header-text">
            <p>
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Lucknow, based on trends
            </p>
            <a href="#">
              <span>All collections in Lucknow</span>
              <IoMdArrowDropright></IoMdArrowDropright>
            </a>
          </div>
        </div>
        {/* Top Restaurants Collection */}
          <div className="slider-style">
          <Slider {...settings}>
            {
              data.map((item, i) => {
                return <TopRestaurantsCollectionSlider key={i} data={item}></TopRestaurantsCollectionSlider>
              })
            }
          </Slider>
          </div>
      </div>
    </div>
  );
};

TopRestaurantsCollection.propTypes = {
  data: PropTypes.array,
};

export default TopRestaurantsCollection;
