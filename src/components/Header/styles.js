import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 100px;
  max-width: 400px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    strong {
      color: #c8c8c8;
      margin-top: 10px;
    }
  }
`;
