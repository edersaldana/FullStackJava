import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "@/config/api";
import "@/styles/admin.css";

export const ProductForm = () => {
  const { id } = useParams(); // Si existe, estamos editando
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    stock: 0,
    imageUrl: "",
    category: ""
  });

  useEffect(() => {
    if (id) {
      // Si hay ID, cargamos los datos del producto para editarlos
      axios.get(`${API_BASE_URL}/api/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.error("Error al cargar producto", err));
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`${API_BASE_URL}/api/products/${id}`, product);
      } else {
        await axios.post(`${API_BASE_URL}/api/products`, product);
      }
      navigate("/admin/inventory"); // Volver a la tabla tras guardar
    } catch (err) {
      alert("Error al guardar el producto");
    }
  };

  return (
    <div className="admin-inventory-container">
      <h2>{id ? "Editar Producto" : "Nuevo Producto"}</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" value={product.name} onChange={e => setProduct({...product, name: e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Precio (S/)</label>
          <input type="number" value={product.price} onChange={e => setProduct({...product, price: Number(e.target.value)})} required />
        </div>
        <div className="form-group">
          <label>Stock</label>
          <input type="number" value={product.stock} onChange={e => setProduct({...product, stock: Number(e.target.value)})} required />
        </div>
        <div className="form-group">
          <label>URL Imagen</label>
          <input type="text" value={product.imageUrl} onChange={e => setProduct({...product, imageUrl: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Categoría</label>
          <input type="text" value={product.category} onChange={e => setProduct({...product, category: e.target.value})} />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-create">Guardar</button>
          <button type="button" onClick={() => navigate("/admin/inventory")} className="btn-cancel">Cancelar</button>
        </div>
      </form>
    </div>
  );
};