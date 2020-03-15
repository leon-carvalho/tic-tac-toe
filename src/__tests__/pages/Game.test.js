import React from 'react';

import { render, fireEvent, cleanup } from '@testing-library/react';

import Game from '../../pages/Game';

describe('Game page', () => {
  afterEach(() => {
    cleanup();
  });

  test('it should render "9" cards inside board', () => {
    const { getAllByTestId } = render(<Game />);
    const cards = getAllByTestId('card-game');

    expect(cards.length).toBe(9);
  });

  test('it should change "currentPlayer" when clicked', () => {
    const { getAllByTestId } = render(<Game />);

    const firstCard = getAllByTestId('card-game')[0];
    const secondCard = getAllByTestId('card-game')[1];

    fireEvent.click(firstCard);

    expect(firstCard).toHaveTextContent('X');

    fireEvent.click(secondCard);

    expect(secondCard).toHaveTextContent('O');
  });

  test('card should be disabled after click', () => {
    const { getAllByTestId } = render(<Game />);

    const firstCard = getAllByTestId('card-game')[0];

    fireEvent.click(firstCard);

    expect(firstCard).toBeDisabled();
  });

  test('it should reset game when click on "Reset Game" button', () => {
    const { getAllByTestId, getByText } = render(<Game />);

    const firstCard = getAllByTestId('card-game')[0];
    const resetButton = getByText('Reset Game');

    fireEvent.click(firstCard);

    expect(firstCard).toHaveTextContent('X');

    fireEvent.click(resetButton);

    expect(firstCard).toHaveTextContent('9');
  });
});
