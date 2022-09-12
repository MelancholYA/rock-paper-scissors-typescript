import { createContext, useContext } from "react";

interface Icontext {
  score: number;
  setScore: (s: number) => void;
}

const ScoreContext = createContext<Icontext>({
  score: 0,
  setScore: () => {},
});
const useScoreContext = () => useContext(ScoreContext);

export { ScoreContext, useScoreContext };
