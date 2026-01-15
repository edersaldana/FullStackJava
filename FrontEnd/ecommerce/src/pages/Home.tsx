import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom" // Requerido para detectar la búsqueda
import ProductCard from "@/components/products/ProductCard"
import { getProducts } from "@/services/productService"
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
  
  // Leemos el parámetro "search" de la URL
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

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

  // Lógica de filtrado: se ejecuta automáticamente cuando cambia searchQuery o products
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

  if (loading) {
    return <p className="text-center mt-10 text-gray-500 italic">Cargando productos...</p>
  }

  return (
    <div className="container mx-auto px-6">
      <h1 className="text-2xl font-bold mb-6">
        {searchQuery ? `Resultados para: "${searchQuery}"` : "Productos"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              {...product} // Pasa todas las propiedades automáticamente
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-gray-500 text-lg">
              No se encontraron productos que coincidan con <strong>"{searchQuery}"</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}