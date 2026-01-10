import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Agregamos navegación
import { API_BASE_URL } from '@/config/api';
import '@/styles/admin.css';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
}

export const AdminInventory = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook para movernos entre páginas

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error al cargar productos", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      try {
        await axios.delete(`${API_BASE_URL}/api/products/${id}`);
        setProducts(products.filter(p => p.id !== id));
      } catch (error) {
        alert("Error al eliminar. Verifica que el backend tenga @DeleteMapping.");
      }
    }
  };

  if (loading) return <div className="admin-inventory-container"><p>Cargando inventario...</p></div>;

  return (
    <div className="admin-inventory-container">
      <div className="admin-header">
        <h1>Gestión de Inventario</h1>
        {/* CONECTADO: Navega al formulario vacío */}
        <button className="btn-create" onClick={() => navigate('/admin/new')}>
          ➕ Nuevo Producto
        </button>
      </div>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>#{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>S/ {product.price}</td>
              <td className={product.stock < 5 ? 'low-stock' : ''}>
                {product.stock} u.
              </td>
              <td>
                {/* CONECTADO: Navega al formulario con el ID del producto */}
                <button 
                  className="btn-action edit" 
                  onClick={() => navigate(`/admin/edit/${product.id}`)}
                >
                  ✏️
                </button>
                <button 
                  className="btn-action delete" 
                  onClick={() => handleDelete(product.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};