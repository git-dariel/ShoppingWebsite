import styled from "styled-components";

const Container = styled.div`
  border-bottom: 1px solid gray;
`;

const Wrapper = styled.div`
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 665px) {
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;

  @media (max-width: 665px) {
    width: 20px;
    height: 20px;
    margin-bottom: -1.33rem;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 665px) {
    padding: 0px 5px;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-weight: 900;
  padding: 0px 20px;

  .cart-icon {
    height: 25px;
    width: 25px;
    margin-right: 30px;

    @media (max-width: 665px) {
      height: 20px;
      width: 20px;
    }
  }

  .cart-link {
    cursor: pointer;
    color: white;

    &:hover {
      color: gray;
      transition: 0.3s ease-in;
    }
  }

  .logout-icon {
    height: 25px;
    width: 25px;
    cursor: pointer;
    color: white;

    &:hover {
      color: red;
      transition: 0.3s ease-in;
    }

    @media (max-width: 665px) {
      height: 20px;
      width: 20px;
    }
  }
`;

const style = {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  MenuItem,
};

export default style;
