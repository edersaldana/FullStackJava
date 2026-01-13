const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-10 border-t border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
        <p>
          &copy; {currentYear} <span className="font-semibold text-red-600">MyStore</span>. 
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;