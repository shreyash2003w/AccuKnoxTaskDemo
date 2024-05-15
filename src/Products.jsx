// Products.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "./app/store";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";



const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  // Retriving Boormarked Products
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);

  const { isLoading, error, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });


  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.category.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBookmarkToggle = (product) => {
    const isBookmarked = bookmarks.some((item) => item.id === product.id);
    if (isBookmarked) {
      dispatch(removeBookmark(product));
    } else {
      dispatch(addBookmark(product));
    }
  };

  if (isLoading) {
    return <h3 className="text-center">Loading....</h3>;
  }

  if (error) {
    return <h3 className="text-center">Error: {error}</h3>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Purchase 
        </h2>
        <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts?.map((product) => (
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

export default Products;
