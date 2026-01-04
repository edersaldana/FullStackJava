import type { Order } from "@/types/order"
import { API_BASE_URL } from "@/config/api"

const API_URL = `${API_BASE_URL}/api/orders`

export async function getOrders(): Promise<Order[]> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Error al obtener órdenes")
  }

  return response.json()
}
