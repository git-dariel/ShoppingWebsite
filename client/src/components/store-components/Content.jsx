import React from "react";
import style from "../../styles/Store/Content";
import img from "../../assets/img/iphone15.png";
import img2 from "../../assets/img/macbookair.png";
import img3 from "../../assets/img/ipad.png";

const Content = () => {
  return (
    <>
      <style.Title>New Arrivals</style.Title>
      <style.Wrapper>
        <style.Product>
          <style.ImgWrapper>
            <style.ProductName>iPhone 15</style.ProductName>
            <style.Img src={img} alt="iphone" />
            <style.Price>
              <style.NewPrice>$900</style.NewPrice>
            </style.Price>
            <style.AddtoCartWrapper>
              <style.AddtoCart>Add to Cart</style.AddtoCart>
            </style.AddtoCartWrapper>
          </style.ImgWrapper>
        </style.Product>

        <style.Product>
          <style.ImgWrapper>
            <style.ProductName>MacBook Air</style.ProductName>
            <style.Img src={img2} alt="macbook" />
            <style.Price>
              <style.NewPrice>$1232,59</style.NewPrice>
            </style.Price>
            <style.AddtoCartWrapper>
              <style.AddtoCart>Add to Cart</style.AddtoCart>
            </style.AddtoCartWrapper>
          </style.ImgWrapper>
        </style.Product>

        <style.Product>
          <style.ImgWrapper>
            <style.ProductName>iPad Pro</style.ProductName>
            <style.Img src={img3} alt="ipad" />
            <style.Price>
              <style.NewPrice>$1,099</style.NewPrice>
            </style.Price>
            <style.AddtoCartWrapper>
              <style.AddtoCart>Add to Cart</style.AddtoCart>
            </style.AddtoCartWrapper>
          </style.ImgWrapper>
        </style.Product>
      </style.Wrapper>
    </>
  );
};

export default Content;
