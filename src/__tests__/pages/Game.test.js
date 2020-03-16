import React from 'react';

import { render, fireEvent, cleanup } from '@testing-library/react';

import Game from '../../pages/Game';

describe('Game page', () => {
  afterEach(() => {
    cleanup();
    localStorage.clear();
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

  test('it should set clicked card as disabled after click', () => {
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

    expect(firstCard).toHaveTextContent('');
    expect(localStorage.clear).toHaveBeenCalled();
  });

  test('it should show "Draw Message" when the game is draw', () => {
    const { getByText, getAllByTestId } = render(<Game />);
    const array = new Array(9).fill('');

    array.forEach((item, index) =>
      fireEvent.click(getAllByTestId('card-game')[index])
    );

    expect(getByText(/It is a Draw!!/i)).toBeDefined();
  });

  test('it should show "X wins" message when it wins the game', () => {
    const { getByText, getAllByTestId } = render(<Game />);
    const cards = getAllByTestId('card-game');

    fireEvent.click(cards[0]); // x
    fireEvent.click(cards[1]); // o
    fireEvent.click(cards[3]); // x
    fireEvent.click(cards[4]); // o
    fireEvent.click(cards[6]); // x

    expect(getByText(/x wins/i)).toBeInTheDocument();
  });

  test('it should show "O wins" message when it wins the game', () => {
    const { getByText, getAllByTestId } = render(<Game />);
    const cards = getAllByTestId('card-game');

    fireEvent.click(cards[0]); // x
    fireEvent.click(cards[1]); // o
    fireEvent.click(cards[2]); // x
    fireEvent.click(cards[4]); // o
    fireEvent.click(cards[3]); // x
    fireEvent.click(cards[7]); // o

    expect(getByText(/o wins/i)).toBeInTheDocument();
  });

  test('it should clean board after click in "Play again" button', () => {
    const { getAllByTestId, getByText } = render(<Game />);

    const cards = getAllByTestId('card-game');

    fireEvent.click(cards[0]); // x
    fireEvent.click(cards[1]); // o
    fireEvent.click(cards[3]); // x
    fireEvent.click(cards[4]); // o
    fireEvent.click(cards[6]); // x

    fireEvent.click(getByText(/play again/i));

    cards.forEach((card, index) => {
      expect(cards[index]).toHaveTextContent('');
    });
  });

  test('it should reset game after click in "Reset Game" button', () => {
    const { getAllByTestId, getByText } = render(<Game />);
    const firstCard = getAllByTestId('card-game')[0];

    fireEvent.click(firstCard);

    expect(firstCard).toHaveTextContent('X');

    fireEvent.click(getByText(/reset game/i));

    expect(firstCard).toHaveTextContent('');
  });

  test('it should set and get "score" from localStorage', () => {
    let { getAllByTestId } = render(<Game />);
    const cards = getAllByTestId('card-game');

    fireEvent.click(cards[0]); // x
    fireEvent.click(cards[1]); // o
    fireEvent.click(cards[3]); // x
    fireEvent.click(cards[4]); // o
    fireEvent.click(cards[6]); // x

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'score',
      JSON.stringify({
        xWins: 1,
        oWins: 0,
        draws: 0,
      })
    );

    cleanup();

    ({ getAllByTestId } = render(<Game />));

    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
