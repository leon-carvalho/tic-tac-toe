import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  footer {
    width: 100%;
    height: 120px;

    max-width: 400px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    button {
      height: 50px;
      width: 200px;

      color: #fffffd;
      border: none;
      font-size: 16px;
      background: transparent;
      border: 1px solid #999;
      border-radius: 10px;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Board = styled.div`
  padding: 20px;
  margin: 10px 0;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;

  top: 0%;
  left: 0%;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #465575;

  h1 {
    color: #f3eed9;
  }

  button {
    height: 50px;
    width: 200px;

    color: #fffffd;
    border: none;
    font-size: 16px;
    font-weight: bold;
    background: #00b5ac;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &:hover {
      opacity: 0.8;
    }
  }
`;
