import React from 'react';

const ItemCard = ({ name, image, price, serves }) => {
  return (
    <div className="menu-card">
      <div className="card-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-row">
          <div>
            <label>Serves</label>
            <span>{serves} person{serves > 1 ? 's' : ''}</span>
          </div>
          <div className="price">
            <span>Price</span>
            <h4>${price}</h4>
          </div>
        </div>
        <button className="button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
