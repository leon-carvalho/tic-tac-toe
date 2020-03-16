import React, { useState, useEffect } from 'react';
import {
  IoIosSync,
  IoIosClose,
  IoIosRemove,
  IoIosRadioButtonOff,
} from 'react-icons/io';

import { Container, Board, Card, CurrentPlayer } from './styles';

export default function Game() {
  const emptyBoard = new Array(9).fill('');
  const [board, setBoard] = useState(emptyBoard);

  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [drawsAmount, setDrawsAmount] = useState(0);

  function changeCurrentPlayer() {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  function updateBoardWithPlayer(index) {
    board[index] = currentPlayer;
    setBoard(board);
  }

  function resetGame() {
    setBoard(emptyBoard);
    setDrawsAmount(0);
  }

  function handleCardClick(index) {
    changeCurrentPlayer();
    updateBoardWithPlayer(index);
  }

  return (
    <>
      <Container>
        <header>
          <div>
            <IoIosClose size={40} color="#00C6C1" />
            <strong>3 wins</strong>
          </div>

          <div>
            <IoIosRadioButtonOff size={32} color="#D2A517" />
            <strong>3 wins</strong>
          </div>

          <div>
            <IoIosRemove size={32} color="#c8c8c8" />
            <strong>2 draws</strong>
          </div>
        </header>

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
    </>
  );
}
