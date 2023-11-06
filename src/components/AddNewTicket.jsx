import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import s from "./AddNewTicket.module.css";

import { addDoc, collection } from "@firebase/firestore";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import { db } from "../firebase";

const schema = yup
  .object({
    title: yup.string().required("Title is required").min(6),
    desc: yup.string().required("Description is required").min(8),
    status: yup.string().required("Status is required"),
  })
  .required();

const AddNewTicket = ({ close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { title, desc, status } = data;
    try {
      const docRef = await addDoc(collection(db, "tickets"), {
        title,
        desc,
        status,
      });
      toast.success("New Ticket Add Suceessfully");
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Post Error - ", error);
    }
    // const newTicket = { title, desc };
    // setCardsData((pre) => ({ ...pre, [status]: [newTicket, ...pre[status]] }));
    // close();
    // toast.success("New Ticket Add Suceessfully");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.container}>
      <h2 className={s.title}>Add New Task</h2>
      <div className={s.input_container}>
        <h3>Title</h3>
        <input placeholder="Enter Task Title" {...register("title")} />
        <p className={s.error}>{errors.title?.message}</p>
      </div>
      <div className={s.input_container}>
        <h3>Description</h3>
        <textarea placeholder="Enter Task Description" {...register("desc")} />
        <p className={s.error}>{errors.desc?.message}</p>
      </div>
      <div className={s.input_container}>
        <h3>Status</h3>

        <select defaultValue={""} {...register("status")}>
          <option value="">Select Status</option>
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        <p className={s.error}>{errors.status?.message}</p>
      </div>
      <button type="submit" className={s.button}>
        Create Task
      </button>
    </form>
  );
};

export default AddNewTicket;
