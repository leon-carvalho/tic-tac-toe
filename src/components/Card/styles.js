import styled from 'styled-components';

export const Container = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  font-size: 42px;
  font-weight: bold;
  background: transparent;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  width: 8rem;
  height: 8rem;

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
