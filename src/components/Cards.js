import React from "react";
import TaskCard from "./TaskCard";

const Cards = ({ cardsData }) => {
  return (
    <div className="container_right_side_bottom">
      <div className="detail">
        <h1>TODO (4)</h1>
        {cardsData["Todo"].map((item, idx) => (
          <TaskCard key={idx} title={item.title} desc={item.desc} />
        ))}
      </div>

      <div className="detail">
        <h1>DOING (6)</h1>
        {cardsData["Doing"].map((item, idx) => (
          <TaskCard key={idx} title={item.title} desc={item.desc} />
        ))}
      </div>

      <div className="detail">
        <h1>DONE (8)</h1>

        {cardsData["Done"].map((item, idx) => (
          <TaskCard key={idx} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
