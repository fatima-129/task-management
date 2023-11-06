import React from "react";
import TaskCard from "./TaskCard";

const Cards = ({ tickets }) => {
  const Todo = tickets.filter((d) => d.status === "Todo");
  const Doing = tickets.filter((d) => d.status === "Doing");
  const Done = tickets.filter((d) => d.status === "Done");

  return (
    <div className="container_right_side_bottom">
      <div className="detail">
        <h1>TODO (4)</h1>
        {Todo.map((item, idx) => (
          <TaskCard key={idx} title={item.title} desc={item.desc} />
        ))}
      </div>

      <div className="detail">
        <h1>DOING (6)</h1>
        {Doing.map((item, idx) => (
          <TaskCard key={idx} title={item.title} desc={item.desc} />
        ))}
      </div>

      <div className="detail">
        <h1>DONE (8)</h1>

        {Done.map((item, idx) => (
          <TaskCard key={idx} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
