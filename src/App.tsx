import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Post from "./components/Post";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/Post/:id" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
