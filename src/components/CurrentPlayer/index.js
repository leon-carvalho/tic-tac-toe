import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function CurrentPlayer({ currentPlayer }) {
  return (
    <Container player={currentPlayer}>
      <span>X</span>
      <span>O</span>
    </Container>
  );
}

CurrentPlayer.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
};
