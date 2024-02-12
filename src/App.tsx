import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./pages/Post/components/Blog";
import Header from "./components/Header";
import Post from "./pages/Post/components/Post";
import Contact from "./pages/Contant/compornents/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/Post/:id" element={<Post />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
