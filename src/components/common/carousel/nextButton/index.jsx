import React from 'react';
import PropTypes from "prop-types";

const NextButton = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "white", borderRadius: "50%", justifyContent: "center", alignItems: "center", padding: "4px" }}
      onClick={onClick}
    ></div>
  );
};

NextButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}

export default NextButton;