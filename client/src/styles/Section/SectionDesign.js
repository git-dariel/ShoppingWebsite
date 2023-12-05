import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    margin-top: 7rem;
    text-align: center;
  }
`;

const Details = styled.div`
  margin-top: 6rem;
  margin-bottom: 9rem;
  padding: 0rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: justify;
  color: #b6bbc4;

  img {
    width: 400px;
    height: auto;
    padding-right: 5rem;
    border-radius: 20px;
  }
`;

const style = {
  Details,
  Wrapper,
};

export default style;
