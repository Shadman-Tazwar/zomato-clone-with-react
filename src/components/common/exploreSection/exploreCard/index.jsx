import React from "react";
import PropTypes from "prop-types";
import "./exploreCard.css";
import { AiFillStar } from "react-icons/ai";

const ExploreCard = ({ data, isShowGoldenOffer }) => {
  const restaurantName = data?.info?.name ?? "";
  const restaurantCoverImage = data?.info?.image?.url;
  const deliveryTime = data?.order?.deliveryTime;
  const rating = data?.info?.rating?.rating_text;
  const approxPrice = data?.info?.cfo?.text;
  const offers = data?.bulkOffers?.[0] ?? [];
  const cuisines = data?.info?.cuisine
    ?.map((item) => {
      return item.name;
    })
    .slice(0, 3);
  const bottomContent = data?.bottomContainers;

  const approxTwoPrice = data?.info?.cft?.text;
  const goldDiscount = `${data?.gold.length === 0 ? '' : data?.gold?.text + ' ' + data?.gold?.offerValue}`;
  const location = data?.info?.locality?.name;
  const distance = data?.distance;
  const time = data?.info?.timing?.text;
  return (
    <div className="explore-card-container">
      <div className="explore-card-image-container">
        <img
          className="explore-card-image"
          src={restaurantCoverImage}
          alt={restaurantName}
        />
        <div className={`${isShowGoldenOffer === true && data?.gold.length !== 0 ? 'explore-card-golden-discount-content explore-card-discount' : 'explore-card-discount'}`}>
          {isShowGoldenOffer === true && data?.gold.length !== 0 ? (
            <div className="explore-card-golden-discount">
              <img className="explore-card-golden-discount-image absolute-center" src="https://b.zmtcdn.com/data/o2_assets/9b1ff9e19b7fadea6c6a57e081a1f5ac1687776279.png" alt="Zomato Gold" />
              <span>{goldDiscount}</span>
            </div>
          ) : (
            <div className="explore-card-discount-offer">{offers["text"]}</div>
          )}
        </div>
      </div>

      <div className="explore-card-text-content">
        <div className="explore-card-title-rating">
          <div className="explore-card-title">{restaurantName}</div>
          <div className="explore-card-rating">
            <div className="explore-card-rating-number">{rating}</div>
            <AiFillStar className="explore-card-rating-star" />
          </div>
        </div>

        <div className="explore-card-items-price">
          <div className="explore-card-items">
            {cuisines.map((singleItem, i) => {
              return (
                <span key={i}>
                  {singleItem}
                  {i !== cuisines.length - 1 && ","}
                </span>
              );
            })}
          </div>
          <div className="explore-card-price">{isShowGoldenOffer == true ? approxTwoPrice : approxPrice}</div>
        </div>

        <div className="explore-card-opening-delivery-time">
          <div className="explore-card-opening-time">
            {
              isShowGoldenOffer === true ? <div>
                <div className="explore-card-restaurant-location">{location}</div>
                {
                  time !== "" && <div className="explore-card-restaurant-time">{time}</div>
                }
              </div> : ''
            }
          </div>
          <div className="explore-card-delivery-time">{isShowGoldenOffer == true ? distance : deliveryTime}</div>
        </div>

        {bottomContent[0] && (
          <div>
            <div className="horizontal-line"></div>
            <div className="explore-card-footer-image-text">
              <div className="explore-card-footer-image">
                <img src={bottomContent[0]?.image?.url} alt="Footer Image" />
              </div>
              <div className="explore-card-footer-text">
                {bottomContent[0]?.text}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

ExploreCard.propTypes = {
  data: PropTypes.object,
  isShowGoldenOffer: PropTypes.bool,
};

export default ExploreCard;
