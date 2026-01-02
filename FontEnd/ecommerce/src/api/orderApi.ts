import axios from "axios"
import type { CreateOrderRequest } from "./OrderTypes"

const API_URL = "http://localhost:8084/api/orders"


export const createOrder = async (data: CreateOrderRequest) => {
  const response = await axios.post(API_URL, data)
  return response.data
}

export const getOrders = async () => {
  const response = await axios.get(API_URL)
  return response.data
}
