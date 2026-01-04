import type { Order } from "../types/order"

export const ordersMock: Order[] = [
  {
    id: 1,
    orderNumber: "ORD-2025-001",
    status: "PENDING",
    totalAmount: 120.5,
    createdAt: "2025-01-10",
    items: [
      {
        productId: 1,
        quantity: 2,
        unitPrice: 50,
        subtotal: 100,
      },
    ],
  },
]
