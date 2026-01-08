import React, { useState } from 'react';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Importante: Apuntar al Gateway puerto 9080
      const response = await axios.post('http://localhost:9080/api/auth/login', {
        email,
        password
      });

      // Guardamos el token para que OrderApi lo pueda usar
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      alert('¡Bienvenido!');
      window.location.href = '/'; // Redirigir al Home
    } catch (error) {
      console.error('Error en login:', error);
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};