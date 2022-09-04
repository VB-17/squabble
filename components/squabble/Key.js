import { useGameState } from "../../GameStateProvider";

function Key({ value, isBigKey, isDisabled }) {
  const [state, dispatch] = useGameState();
  const handleClick = () => {
    if (value === "ENTER") {
      dispatch({ type: "PRESSED_ENTER", currentState: state });
    } else if (value === "DELETE") {
      dispatch({ type: "PRESSED_BACKSPACE", currentState: state });
    } else {
      dispatch({
        type: "PRESSED_KEY",
        currentState: state,
        key: value,
      });
    }
  };
  return (
    <div
      className="key"
      id={isBigKey ? "big" : isDisabled ? "disabled" : ""}
      onClick={handleClick}
    >
      {value}
    </div>
  );
}

export default Key;
