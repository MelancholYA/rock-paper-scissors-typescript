import { FC, useState } from "react";

//componants
import Header from "./componants/Header";
import Rules from "./componants/Rules";

// context
import { ScoreContext } from "./context/ScoreContext";

//styles
import "./styles/Main.css";

const App: FC = () => {
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <Header />
      <Rules />
    </ScoreContext.Provider>
  );
};

export default App;
