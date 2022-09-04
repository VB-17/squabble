const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WORDS": {
      const { correctWord, wordArr } = action;
      return {
        ...state,
        correctWord,
        wordSet: new Set(wordArr),
      };
    }

    case "SET_DISABLED_LETTERS": {
      const { currentState, key } = action;
      return {
        ...state,
        disabledLetters: [...state.disabledLetters, key],
      };
    }
    case "PRESSED_KEY": {
      const { currentState, key } = action;
      const { currentAttempt, board } = currentState;

      console.log(currentAttempt);
      if (currentAttempt.letter <= 4) {
        const newBoard = [...board];
        newBoard[currentAttempt.attempt][currentAttempt.letter] = key;

        return {
          ...state,
          board: newBoard,
          currentAttempt: {
            attempt: currentAttempt.attempt,
            letter: currentAttempt.letter + 1,
          },
        };
      } else {
        alert("Can only enter 5 letters");
        return;
      }
    }
    case "PRESSED_ENTER": {
      const { currentState } = action;
      const { currentAttempt, board, wordSet, correctWord } = currentState;

      const currentGuess = "";
      for (let i = 0; i < 5; i++) {
        const letter = board[currentAttempt.attempt][i].toLowerCase();
        currentGuess += letter;

        console.log(correctWord, currentGuess);
      }

      if (currentAttempt.letter !== 5) {
        alert("Enter 5 letters");
        return {
          ...state,
        };
      }

      if (currentGuess === correctWord) {
        return {
          ...state,
          gameState: {
            isGameOver: true,
            isGuessed: true,
          },
        };
      }

      if (currentAttempt.attempt === 5) {
        return {
          ...state,
          gameState: {
            isGameOver: true,
            isGuessed: false,
          },
        };
      }

      if (wordSet.has(currentGuess.toLowerCase())) {
        return {
          ...state,
          currentAttempt: {
            attempt: currentAttempt.attempt + 1,
            letter: 0,
          },
        };
      } else {
        alert("Word not found");
        return {
          ...state,
        };
      }
    }

    case "PRESSED_BACKSPACE": {
      const { currentState } = action;
      const { currentAttempt, board } = currentState;

      if (currentAttempt.letter >= 1) {
        const newBoard = [...board];
        newBoard[currentAttempt.attempt][currentAttempt.letter - 1] = "";
        return {
          ...state,
          board: newBoard,
          currentAttempt: {
            ...currentAttempt,
            letter: currentAttempt.letter - 1,
          },
        };
      } else {
        return {
          ...state,
        };
      }
    }

    default:
      return { ...state };
  }
};

export const initialState = {
  board: [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ],
  currentAttempt: {
    attempt: 0,
    letter: 0,
  },
  wordSet: new Set(),
  correctWord: "",
  gameState: {
    isGameOver: false,
    isGuessed: false,
  },
  disabledLetters: [],
};

export default reducer;
