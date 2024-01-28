import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
