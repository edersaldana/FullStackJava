import axios from "axios"
import type { CreateOrderRequest } from "./OrderTypes"
import { API_BASE_URL } from "@/config/api"

const API_URL = `${API_BASE_URL}/api/orders`

export const createOrder = async (orderData: any,token: string) => {
  //const token = localStorage.getItem('token');
  
  const response = await axios.post(API_URL, orderData, {
    headers: {
      Authorization: `Bearer ${token}` // Aquí enviamos la identidad
    }
  });
  return response.data;
}

export const getOrders = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data; // <-- Devolver solo la data aquí
};
