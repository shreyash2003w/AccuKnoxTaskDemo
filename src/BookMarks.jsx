import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { addBookmark,removeBookmark } from "./app/store";
const Bookmarks = () => {
  // Retrieve bookmarked products from Redux store
  const bookmarks = useSelector(state => state.bookmarks.bookmarks);

  const dispatch = useDispatch();
  
  const handleBookmarkToggle = (product) => {
    const isBookmarked = bookmarks.some((item) => item.id === product.id);
    if (isBookmarked) {
      dispatch(removeBookmark(product));
    } else {
      dispatch(addBookmark(product));
    }
  };

  return (
    <div className="bg-white">
        <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Bookmarked Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {bookmarks.map((product) => (
            // <div key={product.id} className="group relative">
            //   <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            //     <img
            //       src={product.thumbnail}
            //       alt={product.title}
            //       className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            //     />
            //   </div>
            //   <div className="mt-4 flex justify-between">
            //     <div>
            //       <h3 className="text-sm text-gray-700">
            //         {product.title}
            //         <p className="mt-1 text-sm text-gray-500">
            //           {product.category}
            //         </p>
            //       </h3>
            //     </div>

            //     <p className="text-sm font-medium text-gray-900">
            //       {product.price}
            //     </p>
            //   </div>
            // </div>
            <ProductCard
              key={product.id}
              product={product}
              handleBookmarkToggle={handleBookmarkToggle}
              bookmarks={bookmarks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
