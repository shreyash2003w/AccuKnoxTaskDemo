


export const fetchProductByID = async (productID) => {
    const response = await fetch(
      `https://dummyjson.com/products/${productID}`
    );
    const data = await response.json();
    return data;
  };

  export const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  };