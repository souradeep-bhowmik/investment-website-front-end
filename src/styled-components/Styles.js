import styled from "styled-components";

export const Item = styled.h4`
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`;

export const UploadTransactionComponent = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0rem 3rem;
  h1 {
  }
`;

export const DisplayDataComponent = styled.div`
  padding: 3rem 0rem;
`;

export const Heading = styled.h1`
  font-weight: bold;
  text-align: center;
  padding: 3rem 0rem;
  width: 100%;
`;
