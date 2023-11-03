import React from "react";
import TaskCard from "./TaskCard";

const Cards = () => {
  return (
    <div className="container_right_side_bottom">
      <div className="detail">
        <h1>TODO (4)</h1>

        <TaskCard
          title={"Build UI for enboarding flow"}
          desc={"0 of 3 subtasks"}
        />

        <TaskCard title={"Build UI for search"} desc={"0 of 2 subtasks"} />
        <TaskCard title={"Build UI for search"} desc={"0 of 2 subtasks"} />
      </div>

      <div className="detail">
        <h1>DOING (6)</h1>

        <TaskCard
          title={"Build UI for enboarding flow"}
          desc={"0 of 1 subtasks"}
        />

        <TaskCard
          title={"Build UI for enboarding flow"}
          desc={"0 of 2 subtasks"}
        />
        <TaskCard
          title={"Build UI for enboarding flow"}
          desc={"0 of 3 subtasks"}
        />

        <TaskCard
          title={"Build UI for enboarding flow"}
          desc={"0 of 3 subtasks"}
        />
      </div>

      <div className="detail">
        <h1>DONE (8)</h1>

        <TaskCard
          title={"Build UI for enboarding flow"}
          desc={"3 of 3 subtasks"}
        />

        <TaskCard
          title={"Build UI for enboarding flow"}
          desc={"0 of 3 subtasks"}
        />

        <TaskCard
          title={"Build UI for enboarding flow"}
          desc={"2 of 3 subtasks"}
        />

        <TaskCard
          title={"Build UI for enboarding flow"}
          desc={"1 of 3 subtasks"}
        />

        <TaskCard
          title={"Build UI for enboarding flow"}
          desc={"0 of 3 subtasks"}
        />
      </div>
    </div>
  );
};

export default Cards;
