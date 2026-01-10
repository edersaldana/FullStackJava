import { useParams, useNavigate } from "react-router-dom";
import { confirmPayment } from "@/api/orderApi";
import "@/styles/payment.css"; // Crearemos este archivo

const PaymentPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handlePay = async () => {
    try {
      if (!token || !orderId) return;
      await confirmPayment(Number(orderId), token);
      alert("💳 ¡Pago aprobado con éxito!");
      navigate("/orders");
    } catch (error) {
      alert("No se pudo procesar el pago. Intenta de nuevo.");
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <header className="payment-header">
          <div className="icon-container">💰</div>
          <h1>Finalizar Pago</h1>
          <p className="order-badge">Orden # {orderId}</p>
        </header>

        <section className="payment-details">
          <div className="detail-row">
            <span>Estado:</span>
            <span className="status-pending">Pendiente de Pago</span>
          </div>
          <div className="detail-row total">
            <span>Monto Total:</span>
            <span>S/ 3,299.99</span> 
          </div>
        </section>

        <section className="payment-methods-sim">
          <p>Método de pago simulado</p>
          <div className="card-mockup">
            <div className="card-chip"></div>
            <div className="card-number">**** **** **** 4242</div>
          </div>
        </section>

        <footer className="payment-footer">
          <button onClick={handlePay} className="pay-button">
            CONFIRMAR Y PAGAR AHORA
          </button>
          <button onClick={() => navigate("/cart")} className="cancel-button">
            Volver al carrito
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PaymentPage;