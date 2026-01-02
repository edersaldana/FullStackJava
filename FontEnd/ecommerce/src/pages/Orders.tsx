import { useEffect, useState } from "react"
import { getOrders } from "@/api/orderApi"
import "@/styles/orders.css"

const statusColor = (status: string) => {
  switch (status) {
    case "PENDING":
      return "bg-yellow-100 text-yellow-700"
    case "PAID":
      return "bg-green-100 text-green-700"
    case "CANCELLED":
      return "bg-red-100 text-red-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

const Orders = () => {
  const [orders, setOrders] = useState<any[]>([])

  useEffect(() => {
    getOrders().then(setOrders)
  }, [])

  return (
    <div className="orders-page">
      <h1 className="page-title">📦 Mis Órdenes</h1>

      <div className="orders-grid">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <span>Orden #{order.orderNumber}</span>
              <span className={`order-status ${statusColor(order.status)}`}>
                {order.status}
              </span>
            </div>

            <div className="order-items">
              {order.items.map((item: any) => (
                <div key={item.productId} className="order-item">
                  <span>{item.product?.name ?? "Producto"}</span>
                  <span>x {item.quantity}</span>
                  <span>S/ {(item.unitPrice * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="order-footer">
              <span>Total</span>
              <strong>S/ {order.totalAmount.toFixed(2)}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
