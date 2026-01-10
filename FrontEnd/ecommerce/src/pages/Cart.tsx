import { useCart } from "@/context/CartContext"
import { createOrder } from "@/api/orderApi"
import { useNavigate } from "react-router-dom"
import type { CreateOrderRequest } from "@/api/OrderTypes"
import "@/styles/cart.css"

export const Cart = () => {
  const {
    items,
    clearCart,
    increaseQty,
    decreaseQty,
    removeFromCart
  } = useCart()

  const navigate = useNavigate()

const handleCreateOrder = async () => {
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');

  if (!token || !userStr) {
    alert("Debes iniciar sesión para comprar");
    navigate('/login');
    return;
  }

  const user = JSON.parse(userStr);

  const orderData = {
    userId: user.id, // ID de Carlos López
    items: items.map(item => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.price
    })),
    total: items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  };

  try {
    await createOrder(orderData, token);
    alert("¡Orden creada con éxito!");
    // Limpiar carrito aquí...
  } catch (error) {
    console.error("Error creando orden", error);
  }
};

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (items.length === 0) {
    return <h2>🛒 El carrito está vacío</h2>
  }

  return (
   <div className="cart-page">
    <h1>🛒 Carrito</h1>
    {items.map(item => (
        <div className="cart-item" key={item.productId}>
        <img src={item.imageUrl} alt={item.name} className="cart-img"/>
        <div className="cart-info">
            <h4>{item.name}</h4>
            <p className="price">S/ {item.price}</p>
            <div className="cart-actions">
            <button onClick={() => decreaseQty(item.productId)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.productId)}>+</button>
            </div>
            <p>Subtotal: S/ {(item.price * item.quantity).toFixed(2)}</p>
        </div>
        <button className="remove-btn" onClick={() => removeFromCart(item.productId)}>❌</button>
        </div>
    ))}
    <div className="cart-summary">
        <span className="cart-total">Total: S/ {total.toFixed(2)}</span>
    </div>
    <button className="checkout-btn" onClick={handleCreateOrder}>Confirmar compra</button>
    </div>
  )
}

