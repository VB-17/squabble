import { useGameState } from "../../GameStateProvider";
import { useEffect } from "react";

function Letter({ row, col }) {
  const [state, dispatch] = useGameState();
  const { board, currentAttempt, correctWord } = state;
  const letter = board[row][col];

  const correct = correctWord[col] === letter.toLowerCase();
  const almost =
    !correct && letter !== "" && correctWord.includes(letter.toLowerCase());

  const letterState =
    currentAttempt.attempt > row &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      dispatch({
        type: "SET_DISABLED_LETTERS",
        currentState: state,
        key: letter,
      });
    }
  }, [currentAttempt.attempt]);
  return (
    <div className="letter" id={letterState || ""}>
      {letter}
    </div>
  );
}

export default Letter;
