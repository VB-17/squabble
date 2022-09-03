import React, { useEffect } from "react";
import Board from "../../components/Board";
import Keyboard from "../../components/Keyboard";
import fs from "fs";
import path from "path";
import { useGameState } from "../../GameState";

function GameRoom({ correctWord, wordArr }) {
  const [state, dispatch] = useGameState();
  useEffect(() => {
    dispatch({ type: "SET_WORDS", correctWord, wordArr });
  }, [correctWord, wordArr]);
  return (
    <div>
      <h1>Squabble</h1>
      <div>
        <Board />
        <Keyboard />
      </div>
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
