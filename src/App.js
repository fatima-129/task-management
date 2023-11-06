import "./App.css";

import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { db } from "./firebase";

function App() {
  const [tickets, setTickets] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "tickets")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTickets(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="container">
      <Toaster />
      <Sidebar />
      <div className="container_right_side">
        <Navbar />
        <Cards tickets={tickets} />
      </div>
    </div>
  );
}

export default App;
