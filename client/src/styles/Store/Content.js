import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 2rem 4rem;

  h2 {
    font-size: 40px;
    font-weight: 400;
    text-align: center;
  }
`;

const Products = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 15px;
  width: 250px;
  max-width: 100%;
  height: 400px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    2px 2px 5px rgba(94, 104, 121, 0.3);

  h3 {
    font-size: 25px;
    font-weight: 400;
    text-align: center;
  }

  img {
    width: 80%;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }

  .price {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin-top: 2rem;
    font-weight: 400;
    letter-spacing: 1.15px;
    background-color: #001524;
    color: #f9f9f9;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: #b4b4b3;
      color: black;
      transition: 0.3s ease-in;
    }
  }
`;

const style = {
  HomeContainer,
  Products,
  Product,
};

export default style;
