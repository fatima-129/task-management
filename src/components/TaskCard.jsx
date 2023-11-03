const TaskCard = ({ title, desc }) => {
  return (
    <div className="boxes">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default TaskCard;
