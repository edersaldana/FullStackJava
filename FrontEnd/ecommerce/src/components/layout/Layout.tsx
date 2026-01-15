import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react"; // Importamos iconos para un look pro

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navega a la Home con el parámetro 'search' en la URL
    // Si el término está vacío, vuelve a mostrar todos los productos
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate("/");
    }
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between gap-8">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-red-600 flex-shrink-0">
          MyStore
        </Link>

        {/* Buscador: ¿Qué buscas hoy? */}
        <form 
          onSubmit={handleSearch} 
          className="relative flex-grow max-w-2xl group"
        >
          <input
            type="text"
            placeholder="¿Qué buscas hoy?"
            className="w-full pl-6 pr-12 py-3 border-2 border-red-500 rounded-full focus:outline-none focus:ring-2 focus:ring-red-200 transition-all text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            type="submit" 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 hover:scale-110 transition-transform"
          >
            <Search size={24} />
          </button>
        </form>

        {/* Acciones de Usuario */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="p-2 bg-gray-100 rounded-full group-hover:bg-red-50 transition-colors">
              <User size={24} className="text-blue-600" />
            </div>
            <div className="hidden md:block leading-tight">
              <span className="text-[10px] font-bold text-red-600 block">BIENVENIDO</span>
              <span className="text-sm font-semibold text-gray-700">Ingresar / Mi Cuenta</span>
            </div>
          </div>

          <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingCart size={28} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              0
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
};