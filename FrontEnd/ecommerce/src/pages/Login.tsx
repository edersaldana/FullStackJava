import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/config/api';
import '../styles/login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      window.location.href = '/';
    } catch (err) {
      alert("Credenciales incorrectas. Prueba con: juan.perez@example.com / 12345");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Bienvenido</h1>
        <p>Ingresa tus datos para continuar</p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Correo electrónico</label>
            <input 
              type="email" 
              placeholder="ejemplo@correo.com" 
              onChange={e => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              placeholder="******" 
              onChange={e => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn-primary">Ingresar</button>
        </form>
      </div>
    </div>
  );
};