import { Link, useNavigate } from 'react-router-dom';
import '../../styles/header.css';

export const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload();
  };

  return (
    <header className="pv-header">
      <div className="pv-header-container">
        {/* LADO IZQUIERDO: LOGO */}
        <div className="pv-logo">
          <Link to="/">MyStore</Link>
        </div>

        {/* CENTRO: BUSCADOR */}
        <div className="pv-search-container">
          <input 
            type="text" 
            placeholder="¿Qué estás buscando hoy?" 
            className="pv-search-input"
          />
          <button className="pv-search-btn">🔍</button>
        </div>

        {/* LADO DERECHO: ACCIONES */}
        <div className="pv-actions">
          {user ? (
            <div className="pv-user-item">
              <span className="pv-user-welcome">Hola, <strong>{user.name}</strong></span>
              <div className="pv-dropdown">
                <Link to="/orders">Mis Pedidos</Link>
                <button onClick={handleLogout}>Cerrar Sesión</button>
              </div>
            </div>
          ) : (
            <button className="pv-account-btn" onClick={() => navigate('/login')}>
              👤 Mi Cuenta
            </button>
          )}

          <Link to="/cart" className="pv-cart">
            <span className="cart-icon">🛒</span>
            <span className="cart-badge">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};