import type { Product } from "@/types/product"

const API_URL = "http://localhost:8082/api/products"

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Error al obtener productos")
  }

  return response.json()
}
