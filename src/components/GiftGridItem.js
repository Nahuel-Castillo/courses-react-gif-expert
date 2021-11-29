import React from "react";
import PropTypes from "prop-types";

const GiftGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInDown animate__delay-2s">
      {<img src={url} alt={title}></img>}
    </div>
  );
};

GiftGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GiftGridItem;
