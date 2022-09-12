//hooks
import { useContext } from "react";

//context
import { ScoreContext } from "../context/ScoreContext";

//componants
import {
  ScoreContainer,
  ScoreText,
  ScoreTitle,
} from "../styledComponants/score";

const Score = () => {
  const { score } = useContext(ScoreContext);
  return (
    <ScoreContainer className="score">
      <ScoreTitle>Score</ScoreTitle>
      <ScoreText>{score}</ScoreText>
    </ScoreContainer>
  );
};

export default Score;
