// src/ProductList.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const plantsArray = [
  {
    name: "Lavender",
    category: "Aromatic Plants",
    image: "images/lavender.jpg", // ✅ place inside public/images
    description: "Soothing fragrance and beautiful purple flowers.",
    cost: 10,
  },
  {
    name: "Aloe Vera",
    category: "Medicinal Plants",
    image: "images/aloe.jpg",
    description: "Known for healing properties and skincare benefits.",
    cost: 12,
  },
  {
    name: "Rosemary",
    category: "Aromatic Plants",
    image: "images/rosemary.jpg",
    description: "Aromatic herb often used in cooking and natural remedies.",
    cost: 8,
  },
  {
    name: "Basil",
    category: "Aromatic Plants",
    image: "images/basil.jpg",
    description: "Popular herb used in Italian cuisine with a fresh aroma.",
    cost: 7,
  },
];

export default function ProductList() {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.name} className="product-card">
          <img src={plant.image} alt={plant.name} className="product-img" />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p className="product-price">${plant.cost}</p>
          <button
            className={`product-button ${addedToCart[plant.name] ? "added-to-cart" : ""}`}
            onClick={() => handleAddToCart(plant)}
            disabled={!!addedToCart[plant.name]}
          >
            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}
