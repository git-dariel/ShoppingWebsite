import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #010101;
  border-top: 1px solid gray;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLink = styled.a`
  color: grey;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    color: #0070c9;
  }
`;
