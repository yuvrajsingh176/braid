import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <div
        className="bg-white flex justify-around py-6"
        style={{ boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.15)" }}
      >
        <img src="/logo.svg" alt="logo" />

        <div className="flex justify-between">
          <div className="text-[#4B52D9] text-base font-medium leading-6 flex gap-10 items-center">
            <Link to="whyPool">Why Pool?</Link>
            <Link to="about">About Us</Link>
            <p>FAQs</p>
            <button className="bg-blue-600 text-white py-3 px-5 rounded-full hover:bg-blue-700 cursor-pointer">
              Start a Pool
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Header;
