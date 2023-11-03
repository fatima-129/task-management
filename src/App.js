import "./App.css";

import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div class="container">
      <Sidebar />
      <div class="container_right_side">
        <Navbar />
        <Cards />
      </div>
    </div>
  );
}

export default App;
