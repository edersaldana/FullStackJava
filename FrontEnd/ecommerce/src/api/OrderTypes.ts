export interface CreateOrderRequest {
  userId: number
  items: {
    productId: number
    quantity: number
  }[]
}