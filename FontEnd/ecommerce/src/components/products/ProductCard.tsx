import { useCart } from "@/context/CartContext"
import "@/styles/product.css"

interface ProductCardProps {
  id: number
  name: string
  price: number
  imageUrl: string
}

const ProductCard = ({ id, name, price, imageUrl }: ProductCardProps) => {
  const { addToCart } = useCart()

  const handleAdd = () => {
    addToCart({
      productId: id,
      name,
      price,
      quantity: 1,
      imageUrl
    })
  }

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-img" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">S/ {price}</p>
      <button className="btn-add mt-auto" onClick={handleAdd}>
        ➕ Agregar
      </button>
    </div>
  )
}

export default ProductCard
