import React from "react";
import style from "../../styles/Store/Content";
import { useGetAllProductsQuery } from "../../features/productsApi";

const Contents = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
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

                <button>Add to Cart</button>
              </style.Product>
            ))}
          </style.Products>
        </>
      )}
    </style.HomeContainer>
  );
};

export default Contents;
