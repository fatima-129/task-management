import "./App.css";

import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { DefaultCardsData } from "./CardsData";
import { useState } from "react";

function App() {
  const [cardsData, setCardsData] = useState(DefaultCardsData);
  console.log(cardsData);
  return (
    <div className="container">
      <Sidebar />
      <div className="container_right_side">
        <Navbar setCardsData={setCardsData} />
        <Cards cardsData={cardsData} />
      </div>
    </div>
  );
}

export default App;
