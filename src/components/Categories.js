import React from "react";

import './Catagories.css'

const Categories = ({ setCategory, category }) => {
  let buttons = [
    {
      title: "All",
      category: "all",
    },
    {
      title: "Breakfast",
      category: "breakfast",
    },
    {
      title: "Lunch",
      category: "lunch",
    },
    {
      title: "Shakes",
      category: "shakes",
    },
  ];

  return (
    <div>
      <h3 className="categorie-title">Categories</h3>
      <div>
        {buttons.map((item) => (
          <button onClick={() => setCategory(item.category)} className="button">
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
