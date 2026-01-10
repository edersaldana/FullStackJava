import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from '@/config/api'; // Usamos tu config centralizada
import '../styles/login.css'; // Reutilizamos tu CSS de login

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    try {
      // Endpoint que definimos para tu user-service
      await axios.post(`${API_BASE_URL}/api/auth/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: "USER" 
      });

      alert("¡Cuenta creada con éxito!");
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Error al registrar el usuario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container"> {/* Usamos las clases de login.css */}
      <div className="login-card">
        <h1>Crear cuenta</h1>
        <p>Únete a MyStore y empieza a comprar</p>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Nombre completo</label>
            <input
              type="text"
              name="name"
              placeholder="Ej. Juan Pérez"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="correo@ejemplo.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Mínimo 6 caracteres"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirmar contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repite tu contraseña"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>

        <div className="login-footer">
          <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
        </div>
      </div>
    </div>
  );
};