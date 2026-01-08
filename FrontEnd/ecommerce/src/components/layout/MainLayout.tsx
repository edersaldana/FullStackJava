import { Outlet } from "react-router-dom";
import { Header } from "./Header";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="content">
        <Outlet /> {/* <--- ESTO ES VITAL: Aquí se renderizan Home, Cart, etc. */}
      </main>
      {/* <footer>Tu Footer aquí</footer> */}
    </div>
  );
};

export default MainLayout;