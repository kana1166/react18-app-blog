import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 ">
      <div className="p-6 text-white font-bold">
        <Link to="/">Home</Link>
        <Link to="/contact" className="ml-4">
          Contact{" "}
        </Link>
      </div>
    </header>
  );
};

export default Header;
