import React, { useState } from "react";
import "./categoriesBar.scss";
const Categories = () => {
  const keywords = [
    "All",
    "Musics",
    "Popular Videos",
    "react js",
    "vue js",
    "angular js",
    "coding",
    "cricket",
    "Footbal",
    "Wall street",
  ];
  const [active, setActive] = useState('All')

  const handleClick = (value) => {
    setActive(value)
  }
  return (
    <div className="categoriesBar">
      {keywords.map((value, index) => (
        <span
        className={active === value ? 'active' : ''}
         onClick={()=> setActive(value)}
        key={index}>{value}</span>
      ))}
    </div>
  );
};

export default Categories;
