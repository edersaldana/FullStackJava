# 💻 MyStore Frontend (React + Vite)

Este es el cliente web de la plataforma MyStore. Una interfaz de usuario de alto rendimiento, diseñada bajo principios de **Atomic Design** y optimizada para una experiencia de compra fluida, atractiva y profesional.

---

## 1. 🛠️ Stack Tecnológico Completo

### Core & Framework
* **React 18**: Biblioteca principal para la creación de interfaces basadas en componentes.
* **Vite**: Herramienta de construcción (build tool) que garantiza un Hot Module Replacement (HMR) ultra rápido.
* **TypeScript**: Implementado para asegurar un código robusto con tipado estático.

### Estilos y UI (User Interface)
* **Tailwind CSS**: Framework de CSS basado en utilidades para un diseño ágil.
* **shadcn/ui**: Componentes de alta calidad construidos con Radix UI.
* **Lucide React**: Set de iconos vectoriales consistentes y ligeros.
* **Google Fonts (Inter)**: Tipografía seleccionada para un look moderno y limpio.

### Enrutamiento y Estado
* **React Router Dom v6**: Gestión de navegación SPA y protección de rutas.
* **Context API**: Manejo del estado global (Autenticación y Carrito).
* **Axios**: Cliente HTTP para la comunicación con microservicios.

---

## 2. 🎨 Características de Diseño (UX/UI)

Para transformar una interfaz plana en una experiencia **"Premium"**, hemos implementado:
- **Glassmorphism**: Header con efectos de desenfoque (`backdrop-filter: blur`).
- **Jerarquía Visual**: Sombras suaves (`shadow-md`) y bordes redondeados (`rounded-2xl`).
- **Micro-interacciones**: Efectos de levitación en tarjetas de productos (`hover:translate-y-2`).
- **Diseño Adaptativo**: Interfaz 100% responsiva diseñada con un enfoque Mobile-First.

---

## 3. 🚀 Guía de Instalación y Configuración Paso a Paso

### Paso 1: Configuración de Variables de Entorno
Crea un archivo llamado `.env` en la raíz de la carpeta `/frontend` para establecer la conexión con el Backend:
```env
VITE_API_URL=http://localhost:8080

# Entrar a la carpeta e instalar paquetes base
cd frontend
npm install

# Instalación de Tailwind CSS y el plugin optimizado para Vite
npm install tailwindcss @tailwindcss/vite

npx shadcn@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input

# Iniciar servidor de desarrollo (disponible por defecto en http://localhost:5173)
npm run dev

# Generar versión optimizada para producción (carpeta /dist)
npm run build


# Estructura de carpeta

src/
├── api/                # Clientes de red y definiciones de API
│   ├── http.ts         # Configuración base de Axios
│   ├── orderApi.ts     # Peticiones relacionadas a órdenes
│   └── OrderTypes.ts   # Tipos específicos de la API de órdenes
├── assets/             # Recursos estáticos (react.svg, imágenes)
├── components/         # Componentes organizados por dominio
│   ├── auth/           # Login, Register, formularios de usuario
│   ├── layout/         # Header, Footer, Sidebar
│   ├── products/       # ProductCard, ProductList
│   └── ui/             # Componentes base de shadcn/ui
├── config/             # Variables de configuración global (api.ts)
├── context/            # Estado global (CartContext.tsx)
├── lib/                # Utilidades y funciones de ayuda (utils.ts)
├── mocks/              # Datos de prueba para desarrollo (orders.ts)
├── pages/              # Vistas principales de la aplicación
│   ├── Admin/          # Módulo de administración
│   ├── AdminInventory.tsx
│   ├── Cart.tsx
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Orders.tsx
│   ├── PaymentPage.tsx
│   └── Register.tsx
├── router/             # Configuración de rutas (AppRouter.tsx)
├── services/           # Capa de servicios (orderService.ts, productService.ts)
├── styles/             # Archivos CSS modulares
│   ├── admin.css, buttons.css, cart.css, header.css, home.css,
│   ├── layout.css, login.css, orders.css, payment.css, product.css
├── types/              # Definiciones de TypeScript (cart.ts, order.ts, product.ts)
├── App.tsx             # Componente raíz y Layout
├── index.css           # Estilos globales y directivas Tailwind
├── main.tsx            # Punto de entrada de la aplicación
└── vite-env.d.ts       # Definiciones de tipos para Vite
