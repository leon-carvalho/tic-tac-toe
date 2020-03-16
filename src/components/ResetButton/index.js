import React from 'react';
import { IoIosSync } from 'react-icons/io';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ResetButton({ text, handleClick }) {
  return (
    <Container onClick={handleClick}>
      <IoIosSync size={24} color="#fff" />
      {text}
    </Container>
  );
}

ResetButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
