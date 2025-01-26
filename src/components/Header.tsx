import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => {
        nav("/");
      }}
      className="bg-white  py-6 w-full"
      style={{ boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="flex justify-between flex-grow px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
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
    </div>
  );
};

export default Header;
