import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext'; // 1. Importar el hook del carrito
import '../../styles/header.css';

export const Header = () => {
  const navigate = useNavigate();
  const { items } = useCart(); // 2. Obtener los items del estado global
  
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleLogout = () => {
    //localStorage.removeItem('token');
    //localStorage.removeItem('user');
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  // 3. Calcular el total basado en el estado dinámico del contexto
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="pv-header">
      <div className="pv-header-container">
        <div className="pv-logo">
          <Link to="/">MyStore</Link>
        </div>

        <div className="pv-search-container">
          <input type="text" placeholder="¿Qué buscas hoy?" className="pv-search-input" />
          <button className="pv-search-btn">🔍</button>
        </div>

        <div className="pv-actions">
          {user ? (
            <div className="pv-user-menu-container">
              <div className="pv-account-info">
                <span className="pv-account-label">
                  {user.role === 'ADMIN' ? '👑 Administrador' : `Cliente ${user.role}`}
                </span>
                <span className="pv-user-name">Hola, {user.name}</span>
              </div>
              
              <div className="pv-dropdown">
                <div className="dropdown-arrow"></div>
                {user.role === 'ADMIN' && (
                  <Link to="/admin" className="admin-item">📊 Panel de Control</Link>
                )}
                <Link to="/orders">📦 Mis Pedidos</Link>
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

          <Link to="/cart" className="pv-cart">
            <div className="cart-wrapper">
              <span className="cart-icon">🛒</span>
              {/* 4. Mostrar el badge solo si hay productos */}
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};