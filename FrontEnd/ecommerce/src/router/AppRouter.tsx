// src/router/AppRouter.tsx (o App.tsx)
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login'; // Asegúrate de que la importación sea correcta
import { Cart } from '../pages/Cart';
import { Header } from '../components/layout/Header';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header /> {/* El Header se mantiene fijo arriba */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* ESTA ES LA LÍNEA QUE FALTA */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};