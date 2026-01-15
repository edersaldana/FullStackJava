# Product Service (Catalog & Inventory)

Este servicio gestiona todo el catálogo de productos de la tienda, permitiendo la visualización y administración de los mismos.

## Especificaciones
* **Puerto:** `8082`
* **Base de Datos:** `product_db` (PostgreSQL)

## Funcionalidades
- **Catálogo:** Listado completo de productos para el frontend.
- **Detalle:** Información específica de un producto por ID.
- **Gestión:** Creación y actualización de stock (Solo Admin).

## Endpoints Principales
| Método | Endpoint 			| Descripción 				| Acceso      |
| :--- 	 | :--- 				| :--- 						| :--- 		  |
| `GET`  | `/api/products` 		| Lista todos los productos | Público 	  |
| `GET`  | `/api/products/{id}` | Detalle de un producto 	| Público 	  |
| `POST` | `/api/products` 		| Crear nuevo producto 		| Admin (JWT) |

## Instalación
1. Crear base de datos `product_db`.
2. Configuraciones en `src/main/resources/application.yml`, `src/main/resources/application-dev.yml`, `src/main/resources/application-local.yml`.
3. Ejecutar: `mvn spring-boot:run`.
