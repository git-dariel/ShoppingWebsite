import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 60vh;
  width: 100vw;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

const OneProduct = styled.div`
  width: 250px;
  height: 390px;
  background-color: white;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  align-items: center;
  justify-content: center;
  display: flex;
`;

const ImgWrapper = styled.div``;

const ProductName = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewPrice = styled.p`
  font-size: 18px;
  margin-top: 8px;
`;

const AddtoCartWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddtoCart = styled.button`
  border: none;
  background-color: violet;
  border-radius: 5px;
  height: 30px;
  width: 150px;
  cursor: pointer;

  &:hover {
    background-color: #b931fc;
    color: white;
    transition: 0.3s ease-in;
  }
`;

const style = {
  Wrapper,
  OneProduct,
  Title,
  Img,
  ImgWrapper,
  ProductName,
  Price,
  NewPrice,
  AddtoCart,
  AddtoCartWrapper,
};

export default style;
