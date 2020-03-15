import React from 'react';

import { render, fireEvent, cleanup } from '@testing-library/react';

import Game from '../../pages/Game';

describe('Game page', () => {
  afterEach(() => {
    cleanup();
  });

  test('it should render "9" cards inside board', () => {
    const { getAllByRole } = render(<Game />);
    const cards = getAllByRole('button');

    expect(cards.length).toBe(9);
  });

  test('it should change "currentPlayer" when clicked', () => {
    const { getAllByRole } = render(<Game />);

    const firstCard = getAllByRole('button')[0];
    const secondCard = getAllByRole('button')[1];

    fireEvent.click(firstCard);

    expect(firstCard).toHaveTextContent('X');

    fireEvent.click(secondCard);

    expect(secondCard).toHaveTextContent('O');
  });

  test('card should be disabled after click', () => {
    const { getAllByRole } = render(<Game />);
    const firstCard = getAllByRole('button')[0];

    fireEvent.click(firstCard);

    expect(firstCard).toBeDisabled();
  });
});
