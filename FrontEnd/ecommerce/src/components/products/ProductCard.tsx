import { useState } from "react";
import { useCart } from "@/context/CartContext";
import "@/styles/product.css";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard = ({ id, name, price, imageUrl }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false); // Estado para feedback visual

  const handleAdd = () => {
    addToCart({
      productId: id,
      name,
      price,
      quantity: 1,
      imageUrl
    });

    // Activar feedback visual
    setAdded(true);

    // Opcional: Notificar manualmente si el Context no refresca el Header automáticamente
    window.dispatchEvent(new Event('cartUpdated'));

    // Revertir el botón después de 1.5 segundos
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <div className="product-img-container">
        <img src={imageUrl} alt={name} className="product-img" />
      </div>
      <h3 className="product-name">{name}</h3>
      <p className="product-price">S/ {price}</p>
      
      <button 
        className={`btn-add mt-auto ${added ? 'btn-added' : ''}`} 
        onClick={handleAdd}
        disabled={added}
      >
        {added ? '✅ ¡Añadido!' : '➕ Agregar'}
      </button>
    </div>
  );
};

export default ProductCard;