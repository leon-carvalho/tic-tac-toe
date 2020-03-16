import React from 'react';
import { IoIosClose, IoIosRemove, IoIosRadioButtonOff } from 'react-icons/io';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Header({ oWinsAmount, xWinsAmount, drawsAmount }) {
  return (
    <Container>
      <div>
        <IoIosClose size={40} color="#00C6C1" />
        <strong>{oWinsAmount} win</strong>
      </div>

      <div>
        <IoIosRadioButtonOff size={32} color="#D2A517" />
        <strong>{xWinsAmount} wins</strong>
      </div>

      <div>
        <IoIosRemove size={32} color="#c8c8c8" />
        <strong>{drawsAmount} draws</strong>
      </div>
    </Container>
  );
}

Header.propTypes = {
  oWinsAmount: PropTypes.number.isRequired,
  xWinsAmount: PropTypes.number.isRequired,
  drawsAmount: PropTypes.number.isRequired,
};
