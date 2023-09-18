import styled from "styled-components";

const Container = styled.div`
  border-bottom: 1px solid gray;
`;

const Wrapper = styled.div`
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: 900;
  text-align: center;
  font-size: 18px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  font-weight: 900;
  padding: 0px 20px;

  .link {
    font-size: 14px;
    cursor: pointer;
    font-weight: 900;
    text-decoration: none;
    color: black;

    &:hover {
      color: violet;
      transition: 0.3s ease-in;
    }
  }

  &:hover {
    color: violet;
    transition: 0.3s ease-in;
  }
`;

const style = {
  Container,
  Wrapper,
  Left,
  Center,
  Logo,
  Right,
  MenuItem,
};

export default style;
