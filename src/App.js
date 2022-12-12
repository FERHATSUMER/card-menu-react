import "./App.css";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import data from "./assets/data.js";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("all");

  const filteredCategory =
    category === "all"
      ? data
      : data.filter((item) => item.category === category);

  return (
    <section className="app-container">
      <div className="title1">
        <h2>Our Menu</h2>
      </div>
      <Categories setCategory={setCategory} category={category} />
      <div className="menu-container">
        {filteredCategory.map((item) => (
          <Menu item={item} />
        ))}
      </div>
    </section>
  );
}

export default App;
