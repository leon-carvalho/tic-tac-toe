import styled from 'styled-components';

export const Container = styled.button.attrs({
  type: 'button',
})`
  height: 50px;
  width: 200px;

  color: #fffffd;
  border: none;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #999;
  background: transparent;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover {
    opacity: 0.8;
  }
`;
