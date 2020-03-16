import React, { useState } from 'react';
import { IoIosRemove } from 'react-icons/io';

import Card from '../../components/Card';
import CurrentPlayer from '../../components/CurrentPlayer';
import Header from '../../components/Header';
import ResetButton from '../../components/ResetButton';
import { Container, Board, Overlay } from './styles';

export default function Game() {
  const emptyBoard = new Array(9).fill('');
  const [board, setBoard] = useState(emptyBoard);
  const [draw, setDraw] = useState(false);
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [drawsAmount, setDrawsAmount] = useState(0);
  const [xWinsAmount, setXWinsAmount] = useState(0);
  const [oWinsAmount, setOWinsAmount] = useState(0);

  function changeCurrentPlayer() {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  function updateBoardWithPlayer(index) {
    board[index] = currentPlayer;
    setBoard(board);
  }

  function resetBoard() {
    setDraw(false);
    setWinner(false);
    setBoard(emptyBoard);
  }

  function resetGame() {
    setDraw(false);
    setDrawsAmount(0);

    setWinner(false);
    setXWinsAmount(0);
    setOWinsAmount(0);

    setBoard(emptyBoard);
  }

  function checkDraw() {
    if (board.every(card => card !== '')) {
      setDraw(true);
      setDrawsAmount(drawsAmount + 1);
    }
  }

  function checkWinner() {
    const possibleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    possibleWaysToWin.forEach(cards => {
      if (cards.every(card => card === 'O')) {
        setWinner('O');
        setXWinsAmount(xWinsAmount + 1);
      }
      if (cards.every(card => card === 'X')) {
        setWinner('X');
        setOWinsAmount(oWinsAmount + 1);
      }
    });
  }

  function handleCardClick(index) {
    changeCurrentPlayer();
    updateBoardWithPlayer(index);
    checkDraw();
    checkWinner();
  }

  return (
    <>
      {draw && (
        <Overlay>
          <h1>It is a Draw!!</h1>

          <IoIosRemove size={100} color="#333" />

          <ResetButton text="Play Again" handleClick={resetBoard} />
        </Overlay>
      )}

      {winner && (
        <Overlay>
          <h1>{winner} Wins</h1>
          <IoIosRemove size={100} color="#333" />
          <ResetButton text="Play Again" handleClick={resetBoard} />
        </Overlay>
      )}

      <Container>
        <Header
          xWinsAmount={xWinsAmount}
          oWinsAmount={oWinsAmount}
          drawsAmount={drawsAmount}
        />

        <Board>
          {board.map((card, index) => (
            <Card
              key={index}
              player={card}
              disabled={!!card}
              handleClick={() => handleCardClick(index)}
            />
          ))}
        </Board>

        <footer>
          <CurrentPlayer currentPlayer={currentPlayer} />
          <ResetButton text="Reset Game" handleClick={resetGame} />
        </footer>
      </Container>
    </>
  );
}
