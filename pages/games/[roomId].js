import React, { useEffect } from "react";
import Board from "../../components/squabble/Board";
import Keyboard from "../../components/squabble/Keyboard";
import fs from "fs";
import path from "path";
import { useGameState } from "../../GameStateProvider";

function GameRoom({ correctWord, wordArr }) {
  const [
    {
      gameState: { isGuessed, isGameOver },
    },
    dispatch,
  ] = useGameState();

  useEffect(() => {
    dispatch({ type: "SET_WORDS", correctWord, wordArr });
  }, [correctWord, wordArr, dispatch]);

  return (
    <div className="game">
      <div className="game__left">
        <Board />
        <Keyboard />
      </div>
      <dir className="game__right">
        <Board />
      </dir>
    </div>
  );
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "words.txt");
  const file = fs.readFileSync(filePath, "utf-8");
  const wordArr = file.split("\n");
  const correctWord = wordArr[Math.floor(Math.random() * wordArr.length)];

  return {
    props: { correctWord, wordArr },
  };
}

export default GameRoom;
