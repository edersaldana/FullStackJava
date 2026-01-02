import type { Order } from "../types/order"

const API_URL = "http://localhost:8084/api/orders"
// por ahora puede quedar así (local)

export async function getOrders(): Promise<Order[]> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Error al obtener órdenes")
  }

  return response.json()
}
