import React from "react";

const CardItem = ({ card }) => {
  return (
    <div className="card-item">
      <img src={card.imageSrc} alt="card-image" />
      <h4>{card.title}</h4>
      <p>{card.description}</p>
    </div>
  );
};

export default CardItem;
