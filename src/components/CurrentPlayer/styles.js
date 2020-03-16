import styled from 'styled-components';

export const Container = styled.div`
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
