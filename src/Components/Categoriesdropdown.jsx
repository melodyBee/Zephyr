import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CategoriesDropdown() {
  const [categories, setCategories] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((json) => setCategories(json.data));
  }, []);

  const dropdownStyle = {
    width: "90%",
    minHeight: "40vh",
  };

  return (
    <div
      className="categories-dropdown"
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <Link to="#" id="categories-title" className="categories-title">
        Categories
      </Link>
      {dropdownVisible && (
        <div
          className="categories-dropdown-content"
          style={dropdownStyle}
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <Categories categories={categories} />
        </div>
      )}
    </div>
  );
}

function Categories({ categories }) {
  return (
    <div className="categories">
      {categories.map((val, key) => (
        <Link
          key={key}
          className="category-link"
          to={`/products/category/${val}`}
        >
          {val}
        </Link>
      ))}
    </div>
  );
}

export default CategoriesDropdown;
