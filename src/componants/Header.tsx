import { FC } from "react";
import { HeaderContainer } from "../styledComponants/header";
import Score from "./Score";

type Props = {};

const Header: FC = (props: Props) => {
  return (
    <HeaderContainer>
      <div style={{ color: "white" }}>
        <h3>ROCK</h3>
        <h3>PAPER</h3>
        <h3>SCISSORS</h3>
      </div>
      <Score />
    </HeaderContainer>
  );
};

export default Header;
