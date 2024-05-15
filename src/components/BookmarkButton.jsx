// BookmarkButton.js
import React from "react";

const BookmarkButton = ({ product, handleBookmarkToggle, bookmarks, style }) => {
  return (
    <button
      onClick={() => handleBookmarkToggle(product)}
      className={` ${
        bookmarks.some((item) => item.id === product.id)
          ? "text-red-500" // Bookmarked style
          : "text-blue-900" // Not bookmarked style
      } ${style}`}
    >
      {bookmarks.some((item) => item.id === product.id)
        ? "Remove Bookmark"
        : "Bookmark"}
    </button>
  );
};

export default BookmarkButton;
