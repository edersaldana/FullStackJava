# API Gateway (The Entry Point)

Este es el único punto de contacto entre el Frontend y los microservicios. Actúa como un proxy inteligente y gestor de seguridad.

## Especificaciones
* **Puerto:** `8080` (URL base del Frontend)
* **Tecnología:** Spring Cloud Gateway

## Responsabilidades
- **Ruteo Dinámico:** Dirige `/auth/**` al puerto 8081, `/api/products/**` al 8082, etc.
- **CORS:** Permite que React (localhost:5173) haga peticiones al backend.
- **Seguridad:** Bloquea peticiones no autorizadas a servicios críticos.

## Mapa de Rutas
| Prefijo URL 		 | Destino 			| Puerto Destino |
| :--- 				 | :--- 			| :--- 			 |
| `/auth/**` 		 | User Service 	| `8081` 		 |
| `/api/products/**` | Product Service  | `8082` 		 |
| `/api/orders/**` 	 | Order Service 	| `8084` 		 |
