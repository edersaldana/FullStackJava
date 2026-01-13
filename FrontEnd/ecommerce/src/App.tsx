import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login"; 
import { Register } from "./pages/Register";
import Orders from "./pages/Orders";
import { CartProvider } from "./context/CartContext";
import { ProductForm } from "./pages/Admin/ProductForm";
import PaymentPage from './pages/PaymentPage';
import { ProtectedRoute } from "./components/auth/ProtectedRoute"; 
import { AdminInventory } from "./pages/AdminInventory";
import Footer from './components/layout/Footer';

// 2. BORRAMOS el const AdminInventory de aquí porque ya lo importamos arriba
const EditProduct = () => <div className="p-4"><h1>Editar Producto (Próximamente)</h1></div>;

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* RUTAS PÚBLICAS */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            
            {/* RUTAS SOLO PARA CLIENTES (USER) */}
            <Route element={<ProtectedRoute allowedRoles={['USER']} />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/payment/:orderId" element={<PaymentPage />} />
            </Route>

            {/* RUTAS SOLO PARA ADMINS */}
            <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
              <Route path="/admin/inventory" element={<AdminInventory />} />
              <Route path="/admin/new" element={<ProductForm />} />      {/* NUEVO */}
              <Route path="/admin/edit/:id" element={<ProductForm />} /> {/* EDITAR */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </CartProvider>
  );
}

export default App;