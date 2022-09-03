import { GameStateProvider } from "../GameStateProvider";
import "../styles/globals.css";
import reducer from "../reducer";
import { initialState } from "../reducer";

function MyApp({ Component, pageProps }) {
  return (
    <GameStateProvider reducer={reducer} initialState={initialState}>
      <Component {...pageProps} />
    </GameStateProvider>
  );
}

export default MyApp;
