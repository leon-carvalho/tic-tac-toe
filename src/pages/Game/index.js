import React, { useState } from 'react';

import { Container, Board, Card } from './styles';

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
            onClick={() => handleCardClick(index)}
          >
            {card}
          </Card>
        ))}
      </Board>
    </Container>
  );
}
