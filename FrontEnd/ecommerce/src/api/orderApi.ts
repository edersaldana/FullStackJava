import axios from "axios"
import type { CreateOrderRequest } from "./OrderTypes"
import { API_BASE_URL } from "@/config/api"

const API_URL = `${API_BASE_URL}/api/orders`

//export const createOrder = async (data: CreateOrderRequest) => {
//  const response = await axios.post(API_URL, data)
//  return response.data
//}

export const createOrder = async (data: CreateOrderRequest) => {
  const token = localStorage.getItem('token');
  
  const response = await axios.post(API_URL, data, {
    headers: {
      Authorization: `Bearer ${token}` // Aquí enviamos la identidad
    }
  });
  return response.data;
}

export const getOrders = async () => {
  const response = await axios.get(API_URL)
  return response.data
}
