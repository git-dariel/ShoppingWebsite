import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useGetAllProductsQuery } from "../../features/productsApi";
import style from "../../styles/Store/Content";

const Contents = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = async (product) => {
    try {
      dispatch(addToCart(product));

      const response = await axios.post(
        "http://localhost:3001/cartProduct",
        product
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <style.HomeContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <style.Products>
            {data?.map((product) => (
              <style.Product>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />

                <p className="price">${product.price}</p>

                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </style.Product>
            ))}
          </style.Products>
        </>
      )}
    </style.HomeContainer>
  );
};

export default Contents;
