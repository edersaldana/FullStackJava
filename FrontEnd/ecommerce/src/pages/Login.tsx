import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '@/config/api';
import '../styles/login.css'; 

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // Estado para el error
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Limpiar errores previos
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, { email, password });
    
      // 1. Extraemos los datos de la respuesta del Backend (AuthResponse)
      const { token, user } = response.data;

      // 2. Guardamos el TOKEN en su propia llave
      localStorage.setItem('token', token);

      // 3. Guardamos la INFO DEL USUARIO en la llave 'user'
      // Como 'user' es un objeto que viene de tu clase Java, 
      // lo convertimos a texto con JSON.stringify
      localStorage.setItem('user', JSON.stringify(user));
      
      // Redirección suave con el router
      navigate('/');
      window.location.reload(); 
    } catch (err: any) {
      // Manejo de errores específicos
      if (err.response && err.response.status === 401) {
        setError("Usuario no encontrado o contraseña incorrecta");
      } else if (err.response && err.response.status === 404) {
        setError("El servicio de autenticación no está disponible");
      } else {
        setError("Ocurrió un error inesperado. Inténtalo más tarde.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Bienvenido</h1>
        <p>Ingresa tus datos para continuar</p>

        {/* MENSAJE DE ERROR ESTILO ALERTA */}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Correo electrónico</label>
            <input 
              type="email" 
              placeholder="ejemplo@correo.com" 
              value={email}
              onChange={e => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              placeholder="******" 
              value={password}
              onChange={e => setPassword(e.target.value)} 
              required 
            />
          </div>
          
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Cargando...' : 'Ingresar'}
          </button>
        </form>

        <div className="login-footer">
          <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
        </div>
      </div>
    </div>
  );
};