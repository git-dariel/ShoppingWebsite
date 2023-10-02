import React from "react";
import style from "../../styles/Store/Content";
import img from "../../assets/img/iphone15.png";

const Content = () => {
  return (
    <>
      <style.Title>New Arrivals</style.Title>
      <style.Wrapper>
        <style.OneProduct>
          <style.ImgWrapper>
            <style.ProductName>iPhone 15</style.ProductName>
            <style.Img src={img} alt="iphone" />
            <style.Price>
              <style.NewPrice>$1500</style.NewPrice>
            </style.Price>
            <style.AddtoCartWrapper>
              <style.AddtoCart>Add to Cart</style.AddtoCart>
            </style.AddtoCartWrapper>
          </style.ImgWrapper>
        </style.OneProduct>
      </style.Wrapper>
    </>
  );
};

export default Content;
