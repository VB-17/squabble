import { useGameState } from "../GameStateProvider";

function Letter({ row, col }) {
  const [{ board }, dispatch] = useGameState();
  
  
  return (
    <div className="letter">
        {board[row][col]}
    </div>
  )
}

export default Letter;
