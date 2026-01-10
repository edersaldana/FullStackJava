import axios from "axios"
import type { CreateOrderRequest } from "./OrderTypes"
import { API_BASE_URL } from "@/config/api"

const API_URL = `${API_BASE_URL}/api/orders`

export const createOrder = async (orderData: any,token: string) => {
  
  const response = await axios.post(API_URL, orderData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export const getOrders = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const confirmPayment = async (orderId: number, token: string) => {
  const response = await axios.patch(`${API_URL}/${orderId}/payment`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}