import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({ player, disabled, handleClick }) {
  return (
    <Container
      player={player}
      disabled={disabled}
      onClick={handleClick}
      data-testid="card-game"
    >
      {player}
    </Container>
  );
}

Card.propTypes = {
  player: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Card.defaultProps = {
  player: '',
  disabled: false,
};
