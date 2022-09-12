import styled from "styled-components";

const ScoreContainer = styled.div`
  background: #ededed;
  width: fit-content;
  padding: 5px 25px;
  border-radius: 5px;
  text-align: center;
`;

const ScoreTitle = styled.h4`
  color: hsl(229, 64%, 46%);
`;

const ScoreText = styled.h1`
  color: hsl(229, 25%, 31%);
  font-weight: 900;
`;

export { ScoreContainer, ScoreTitle, ScoreText };
