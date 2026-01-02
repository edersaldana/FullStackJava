import { createContext, useContext, useState } from "react"

/* =======================
   TIPOS
======================= */
export interface CartItem {
  productId: number
  name: string
  price: number
  quantity: number
  imageUrl?: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
  increaseQty: (productId: number) => void
  decreaseQty: (productId: number) => void
}

/* =======================
   CONTEXT
======================= */
const CartContext = createContext<CartContextType | undefined>(undefined)

/* =======================
   PROVIDER
======================= */
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([])

    const addToCart = (item: CartItem) => {
        setItems(prev => {
        const existing = prev.find(p => p.productId === item.productId)

        if (existing) {
            return prev.map(p =>
            p.productId === item.productId
                ? { ...p, quantity: p.quantity + 1 }
                : p
            )
        }

        return [...prev, { ...item, quantity: 1 }]
        })
    }

    const removeFromCart = (productId: number) => {
        setItems(prev => prev.filter(p => p.productId !== productId))
    }

    const clearCart = () => setItems([])

    const increaseQty = (productId: number) => {
        setItems(prev =>
            prev.map(item =>
            item.productId === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
        )
    }

    const decreaseQty = (productId: number) => {
        setItems(prev =>
            prev
            .map(item =>
                item.productId === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter(item => item.quantity > 0)
        )
    }

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  )
}

/* =======================
   HOOK
======================= */
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
