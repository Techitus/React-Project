import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./Pages/Auth/Register";
import AddBlog from "./Pages/Blog/AddBlog";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Blog/Home";
import EditBlog from "./Pages/Blog/EditBlog";
import SingleBlog from "./Pages/Blog/SingleBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/add" element={<AddBlog />} />
        <Route path="/blog/edit/:id" element={<EditBlog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
