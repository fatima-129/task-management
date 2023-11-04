import "./App.css";

import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { DefaultCardsData } from "./CardsData";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [cardsData, setCardsData] = useState(DefaultCardsData);
  console.log(cardsData);
  return (
    <div className="container">
      <Toaster />
      <Sidebar />
      <div className="container_right_side">
        <Navbar setCardsData={setCardsData} />
        <Cards cardsData={cardsData} />
      </div>
    </div>
  );
}

export default App;
