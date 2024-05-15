import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark,removeBookmark } from "./app/store";
import Navbar from "./components/Navbar";
import BookmarkButton from "./components/BookmarkButton";
import { fetchProductByID } from "./api";
const ProductDetails = () => {
  const params = useParams();

  const dispatch = useDispatch();

  // const fetchProduct = async () => {
  //   const response = await fetch(
  //     `https://dummyjson.com/products/${params.productId}`
  //   );
  //   const data = await response.json();
  //   return data;
  // };

  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);
  console.log(bookmarks);
  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", params.productId],
    queryFn: ()=>fetchProductByID(params.productId),
    // staleTime: 10000,
  });

  const handleBookmarkToggle = (product) => {
    const isBookmarked = bookmarks.some((item) => item.id === product.id);
    if (isBookmarked) {
      dispatch(removeBookmark(product));
    } else {
      dispatch(addBookmark(product));
    }
  };


  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <Navbar className/>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={product.thumbnail}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <BookmarkButton 
                handleBookmarkToggle={handleBookmarkToggle}
                bookmarks={bookmarks}
                product={product}
                style="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  {bookmarks.some((item) => item.id === product.id)
                      ? "Remove Bookmark"
                      : "Bookmark"}
                </BookmarkButton>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Category: {product.category}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {" "}
                  ${product.price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {" "}
                  {product.stock}
                </span>
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
