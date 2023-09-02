import React from "react";
import styled from "styled-components";
// import { ShoppingCartOutlined } from "@material-ui/icons";
// import Badge from "@material-ui/core/Badge";

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

  &:hover {
    color: violet;
    transition:  0.3s ease-in;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>STORE by persyphone</Logo>
        </Left>
        <Center></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>

          <MenuItem>SIGN IN</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
