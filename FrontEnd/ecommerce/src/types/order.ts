export interface OrderItem {
  productId: number
  quantity: number
  unitPrice: number
  subtotal: number
}

export interface Order {
  id: number
  orderNumber: string
  status: string
  totalAmount: number
  createdAt: string
  items: OrderItem[]
}
