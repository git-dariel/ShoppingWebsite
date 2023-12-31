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

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media (max-width: 665px) {
    margin-bottom: -1.1rem;
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
  font-size: 14px;
  cursor: pointer;
  font-weight: 900;
  padding: 0px 20px;

  .link {
    font-size: 14px;
    cursor: pointer;
    font-weight: 900;
    text-decoration: none;
    color: white;

    &:hover {
      color: gray;
      transition: 0.3s ease-in;
    }
  }

  &:hover {
    color: gray;
    transition: 0.3s ease-in;
  }

  @media (max-width: 665px) {
    padding: 0px 20px;
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
