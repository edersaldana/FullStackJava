import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navega a la Home y añade el parámetro de búsqueda a la URL
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate("/"); // Si está vacío, muestra todo
    }
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between gap-8">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-red-600">
          MyStore
        </Link>

        {/* Buscador central */}
        <form onSubmit={handleSearch} className="relative flex-grow max-w-2xl">
          <input
            type="text"
            placeholder="¿Qué buscas hoy?"
            className="w-full pl-6 pr-12 py-3 border-2 border-red-500 rounded-full focus:outline-none focus:ring-2 focus:ring-red-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
            <Search size={24} />
          </button>
        </form>

        {/* Iconos de Usuario y Carrito */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <User size={24} className="text-blue-600" />
            <div className="hidden md:block leading-tight">
              <span className="text-[10px] font-bold text-red-600 block">BIENVENIDO</span>
              <span className="text-sm font-semibold text-gray-700">Ingresar / Mi Cuenta</span>
            </div>
          </div>
          <ShoppingCart size={28} className="text-gray-600" />
        </div>

      </div>
    </header>
  );
};