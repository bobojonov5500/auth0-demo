import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar";
import Home from "./components/home";
import ReadPost from "./components/readpost";
import CreatePost from "./components/create-post";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="max-w-screen-xl mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<ReadPost />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
