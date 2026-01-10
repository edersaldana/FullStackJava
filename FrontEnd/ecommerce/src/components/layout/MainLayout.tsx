import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import "@/styles/layout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;