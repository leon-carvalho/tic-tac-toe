import React from 'react';
import { IoIosRemove } from 'react-icons/io';

import PropTypes from 'prop-types';

import ResetButton from '../ResetButton';
import { Container } from './styles';

export default function Overlay({ message, handleClick }) {
  return (
    <Container>
      <h1>{message}</h1>

      <IoIosRemove size={100} color="#333" />

      <ResetButton text="Play Again" handleClick={handleClick} />
    </Container>
  );
}

Overlay.propTypes = {
  message: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
