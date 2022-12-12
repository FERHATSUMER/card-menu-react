import React from "react";
import "./Menu.css"
const Menu = ({ item }) => {
  return (
    <div className="container">
      <img className="img" src={item.img} alt="resim" />
      <div className="info">
        <div className="title-price">
          <h4 className="title">{item.title}</h4>
          <div className="price">${item.price}</div>
        </div>
        <div className="desc">{item.desc}</div>
      </div>
    </div>
  );
};

export default Menu;
