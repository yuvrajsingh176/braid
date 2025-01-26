import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex justify-between flex-col h-screen">
      <Header />
      <div className="px-96">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
