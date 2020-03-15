import React, { useState } from 'react';
import { IoIosSync } from 'react-icons/io';

import { Container, Board, Card, CurrentPlayer } from './styles';

export default function Game() {
  const emptyBoard = new Array(9).fill('');
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  function changeCurrentPlayer() {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  function updateBoardWithPlayer(index) {
    board[index] = currentPlayer;
    setBoard(board);
  }

  function resetGame() {
    setBoard(emptyBoard);
  }

  function handleCardClick(index) {
    changeCurrentPlayer();
    updateBoardWithPlayer(index);
  }

  return (
    <Container>
      <Board>
        {board.map((card, index) => (
          <Card
            key={index}
            disabled={!!card}
            player={card}
            data-testid="card-game"
            onClick={() => handleCardClick(index)}
          >
            {card}
          </Card>
        ))}
      </Board>

      <footer>
        <CurrentPlayer player={currentPlayer}>
          <span>X</span>
          <span>O</span>
        </CurrentPlayer>

        <button type="button" onClick={resetGame}>
          <IoIosSync size={24} color="#fff" />
          Reset Game
        </button>
      </footer>
    </Container>
  );
}
