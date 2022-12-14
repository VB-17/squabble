import { useCallback, useEffect } from "react";
import { useGameState } from "../../GameStateProvider";
import Key from "./Key";

const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const midRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const bottomRow = ["Z", "X", "C", "V", "B", "N", "M"];

function Keyboard() {
  const [state, dispatch] = useGameState();
  const { gameState, disabledLetters } = state;

  const handleKeyboard = useCallback(
    (e) => {
      if (gameState.isGameOver) return;
      if (e.key === "Enter") {
        dispatch({ type: "PRESSED_ENTER", currentState: state });
      } else if (e.key === "Backspace") {
        dispatch({ type: "PRESSED_BACKSPACE", currentState: state });
      } else {
        topRow.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            dispatch({
              type: "PRESSED_KEY",
              currentState: state,
              key: key,
            });
          }
        });
        midRow.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            dispatch({
              type: "PRESSED_KEY",
              currentState: state,
              key: key,
            });
          }
        });
        bottomRow.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            dispatch({
              type: "PRESSED_KEY",
              currentState: state,
              key: key,
            });
          }
        });
      }
    },
    [dispatch, state, gameState.isGameOver]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard">
      <div className="line">
        {topRow.map((val) => (
          <Key
            key={val}
            value={val}
            isDisabled={disabledLetters.includes(val)}
          />
        ))}
      </div>
      <div className="line">
        {midRow.map((val) => (
          <Key
            key={val}
            value={val}
            isDisabled={disabledLetters.includes(val)}
          />
        ))}
        <Key value={"ENTER"} isBigKey />
      </div>
      <div className="line">
        {bottomRow.map((val) => (
          <Key
            key={val}
            value={val}
            isDisabled={disabledLetters.includes(val)}
          />
        ))}
        <Key value={"DELETE"} isBigKey />
      </div>
    </div>
  );
}

export default Keyboard;
