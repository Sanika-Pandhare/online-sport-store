import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 hover:scale-105 transition-transform cursor-pointer">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 font-medium mb-3">₹{price}</p>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
