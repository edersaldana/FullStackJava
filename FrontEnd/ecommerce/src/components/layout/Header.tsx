import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import '../../styles/header.css';

export const Header = () => {
  const navigate = useNavigate();
  const { items } = useCart();
  
  // --- NUEVA LÓGICA DE BÚSQUEDA ---
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navega a la home con el parámetro ?search=...
      navigate(`/?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/');
    }
  };
  // --------------------------------

  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="pv-header">
      <div className="pv-header-container">
        <div className="pv-logo">
          <Link to="/">MyStore</Link>
        </div>

        {/* BUSCADOR ACTUALIZADO CON FORM Y ESTADO */}
        <form onSubmit={handleSearch} className="pv-search-container">
          <input 
            type="text" 
            placeholder="¿Qué buscas hoy?" 
            className="pv-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="pv-search-btn">🔍</button>
        </form>

        <div className="pv-actions">
          {user ? (
            <div className="pv-user-menu-container">
              <div className="pv-account-info">
                <span className="pv-account-label">
                  {user.role === 'ADMIN' ? '👑 Administrador' : '👤 Cliente'}
                </span>
                <span className="pv-user-name">Hola, {user.name}</span>
              </div>
              
              <div className="pv-dropdown">
                <div className="dropdown-arrow"></div>
                {user.role === 'ADMIN' ? (
                  <Link to="/admin/inventory" className="admin-item">📊 Inventario</Link>
                ) : (
                  <Link to="/orders">📦 Mis Pedidos</Link>
                )}
                <hr />
                <button onClick={handleLogout} className="logout-btn">🚪 Cerrar Sesión</button>
              </div>
            </div>
          ) : (
            <button className="pv-account-btn" onClick={() => navigate('/login')}>
              <span className="user-icon">👤</span>
              <div className="pv-account-info">
                <span className="pv-account-label">Bienvenido</span>
                <span className="pv-user-name">Ingresar / Mi Cuenta</span>
              </div>
            </button>
          )}

          {/* EL CARRITO SOLO SE MUESTRA SI NO ES ADMIN */}
          {user?.role !== 'ADMIN' && (
            <Link to="/cart" className="pv-cart">
              <div className="cart-wrapper">
                <span className="cart-icon">🛒</span>
                {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};