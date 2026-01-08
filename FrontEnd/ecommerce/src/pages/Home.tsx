import { useEffect, useState } from "react"
import ProductCard from "@/components/products/ProductCard"
import { getProducts } from "@/services/productService"
import "../styles/buttons.css"
import "../styles/home.css"

interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
}

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error cargando productos", err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p className="text-center mt-10">Cargando productos...</p>
  }

  return (
    <div className="container mx-auto px-6">
      <h1 className="text-2xl font-bold mb-6">Productos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
