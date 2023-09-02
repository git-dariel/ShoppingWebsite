import React from "react";
import styled from "styled-components";
// import { ShoppingCartOutlined } from "@material-ui/icons";
// import Badge from "@material-ui/core/Badge";

const Container = styled.div`
  border-bottom: 1px solid gray;
`;

const Wrapper = styled.div`
  padding: 20px 50px;
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
  font-weight: bold;
  text-align: center;
  font-size: 16px;
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
  margin-left: 20px;
`;

const MenuWrapper = styled.div`
  width: 80px;
  height: 25px;
  border: 2px solid #040D12;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding-right: 20px;
  margin-right: 20px;
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
          <MenuWrapper>
            <MenuItem>REGISTER</MenuItem>
          </MenuWrapper>

          <MenuWrapper>
            <MenuItem>SIGN IN</MenuItem>
          </MenuWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
