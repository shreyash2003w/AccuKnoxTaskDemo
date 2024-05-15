// ProductCard.js
import React from "react";
import { NavLink } from "react-router-dom";
import BookmarkButton from "./BookmarkButton";

const ProductCard = ({ product, handleBookmarkToggle, bookmarks }) => {
  return (
    <div key={product.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            {product.title}
          </h3>
          <p className="mt-1 text-xs text-gray-500">{product.category}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm font-medium text-gray-700">{product.price}</p>
          {/* Bookmark Button */}
          <BookmarkButton
            style='text-sm font-medium'
            product={product}
            handleBookmarkToggle={handleBookmarkToggle}
            bookmarks={bookmarks}
          />
        </div>
        {/* View Details Button */}
        <NavLink to={`/products/${product.id}`}>
          <button className="text-sm font-medium text-white bg-blue-500 px-3 py-1 rounded-md mt-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCard;
