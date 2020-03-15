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
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;

export const Card = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  font-size: 42px;
  font-weight: bold;
  background: transparent;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  width: 10rem;
  height: 10rem;
  @media (max-width: 320px) {
    width: 80px;
    height: 80px;
    font-size: 30px;
  }

  &:nth-child(3n + 3) {
    border-right: none;
  }

  &:nth-child(1n + 7) {
    border-bottom: none;
  }

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${props => (props.player === 'X' ? '#00C6C1' : '#D2A517')};
`;

export const CurrentPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  border: 1px solid #999;

  span {
    width: 40px;
    height: 40px;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(1) {
      border-radius: 50%;
      transition: all 0.3s ease;
      color: ${props => (props.player === 'X' ? '#fff' : '#00C6C1')};
      background: ${props =>
        props.player === 'X' ? '#00C6C1' : 'transparent'};
    }

    &:nth-child(2) {
      border-radius: 50%;
      transition: all 0.3s ease;
      color: ${props => (props.player === 'O' ? '#fff' : '#D2A517')};
      background: ${props =>
        props.player === 'O' ? '#D2A517' : 'transparent'};
    }
  }
`;
