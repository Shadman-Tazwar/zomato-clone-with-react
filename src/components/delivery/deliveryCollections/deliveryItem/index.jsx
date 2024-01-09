import React from "react";
import "./deliveryItem.css";
import PropTypes from "prop-types";

const DeliveryItem = ({ item }) => {
  return (
    <div>
      <div className="delivery-item-content">
        <img
          className="delivery-item-image"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="delivery-item-title">{item.title}</div>
    </div>
  );
};

DeliveryItem.propTypes = {
  item: PropTypes.object
}

export default DeliveryItem;
