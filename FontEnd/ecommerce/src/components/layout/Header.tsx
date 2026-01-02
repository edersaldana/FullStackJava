import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"

const Header = () => {
  const { items } = useCart()

  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          MyStore
        </Link>

        <Link to="/cart" className="relative">
          🛒
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {items.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}

export default Header
