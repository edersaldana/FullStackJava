```markdown
# 🛒 MyStore: Fullstack E-Commerce Platform

Bienvenido a **MyStore**, una solución integral de comercio electrónico que combina una arquitectura de **Microservicios** robusta con una interfaz de usuario moderna y atractiva.

## 🏗️ Estructura del Proyecto
El proyecto está dividido en dos grandes bloques:

1. **[Backend](./backend/README.md):** Ecosistema de microservicios Java/Spring Boot (User, Product, Order) coordinados por un API Gateway.
2. **[Frontend](./frontend/README.md):** Aplicación SPA (Single Page Application) construida con React y optimizada para la mejor experiencia de usuario.

## 🛠️ Stack Tecnológico Global
- **Frontend:** React, Vite, tailwind, shadcn/ui y router.
- **Backend:** Spring Boot, Spring Cloud Gateway, JWT.
- **Persistencia:** PostgreSQL (Instancias independientes).
- **Herramientas:** Maven, Node.js, Git.

## 🚀 Guía de Instalación Rápida
### Paso 1: Levantar el Backend
Siga las instrucciones detalladas en el [README de Backend](./backend/README.md) para configurar las bases de datos PostgreSQL y encender los servicios en orden (Gateway -> User -> Product -> Order).

### Paso 2: Levantar el Frontend
Siga las instrucciones en el [README de Frontend](./frontend/ecommerce/README.md) para instalar las dependencias de Node y ejecutar el cliente.

## 🔐 Seguridad y Acceso
El sistema utiliza **JWT (JSON Web Tokens)**. 
- Los visitantes pueden ver productos.
- Los usuarios registrados pueden gestionar su carrito y realizar compras.
- Los administradores pueden gestionar el inventario de productos.

## 🧪 Pruebas del Proyecto
El Sistema de E-Commerce llamado MyStore, pueden ingresar dos tipos de usuarios los cuales son:
**ADMIN**: Encargado de administrar los productos que se ofrecen al publico.
**USER**: Los que pueden realizar compras.

A modo de pruebas para el **ADMIN** se registra el siguiente usuario en la base de datos:
usuario: juan.perez@example.com
contraseña: 12345

Para el **USER** solo sera necesario registrarse en la pagina, la cual le pedira los siguientes datos:
Nombre, correo electrónico, contraseña y confirmar la contraseña.

Para una mejor experiencia durante las pruebas se crea una tarjeta virtual para las compras realizadas por el usuario.

Para finalizar se deja un Manual de Usuario en donde indicara la guia completa del uso de la pagina, la guia se llama 'MyStore.pdf'. 

