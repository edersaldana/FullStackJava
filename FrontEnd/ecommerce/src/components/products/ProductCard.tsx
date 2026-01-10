import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import "@/styles/product.css";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard = ({ id, name, price, imageUrl }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);
  
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleAdd = () => {
    addToCart({ productId: id, name, price, quantity: 1, imageUrl });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <div className="product-img-container">
        <img src={imageUrl} alt={name} className="product-img" />
      </div>
      <h3 className="product-name">{name}</h3>
      <p className="product-price">S/ {price}</p>
      
      {/* LÓGICA DE BOTÓN POR ROL */}
      {user?.role === 'ADMIN' ? (
        <button 
          className="btn-add mt-auto btn-admin" 
          onClick={() => navigate(`/admin/edit/${id}`)}
          style={{ backgroundColor: '#4b5563' }}
        >
          ✏️ Editar Producto
        </button>
      ) : (
        <button 
          className={`btn-add mt-auto ${added ? 'btn-added' : ''}`} 
          onClick={handleAdd}
          disabled={added}
        >
          {added ? '✅ ¡Añadido!' : '➕ Agregar'}
        </button>
      )} 
    </div> // <--- Aquí faltaba cerrar la lógica de JS y el div
  );
};

export default ProductCard;