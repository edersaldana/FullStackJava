import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login"; 
import Orders from "./pages/Orders";
import { CartProvider } from "./context/CartContext"; // 1. Importar el Provider

function App() {
  return (
    // 2. Envolver todo el árbol de componentes
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;