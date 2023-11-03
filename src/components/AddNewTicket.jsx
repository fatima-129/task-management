import React, { useState } from "react";

import s from "./AddNewTicket.module.css";

const AddNewTicket = ({ setCardsData, close }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("Todo");

  const setValue = (setFunc) => (e) => setFunc(e.target.value);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newTicket = { title, desc };
    setCardsData((pre) => ({ ...pre, [status]: [newTicket, ...pre[status]] }));
    close();
  };

  return (
    <form onSubmit={handleSubmitForm} className={s.container}>
      <h2 className={s.title}>Add New Task</h2>
      <div className={s.input_container}>
        <h3>Title</h3>
        <input
          type="text"
          placeholder="Enter Task Title"
          onChange={setValue(setTitle)}
        />
      </div>
      <div className={s.input_container}>
        <h3>Description</h3>
        <textarea
          type="text"
          placeholder="Enter Task Description"
          onChange={setValue(setDesc)}
        />
      </div>
      <div className={s.input_container}>
        <h3>Status</h3>

        <select onChange={setValue(setStatus)}>
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <button type="submit" className={s.button}>
        Create Task
      </button>
    </form>
  );
};

export default AddNewTicket;
