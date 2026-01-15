# MyStore Backend Ecosystem

Arquitectura de microservicios escalable desarrollada con **Java 17** y **Spring Boot**.

## Orden de Encendido Sugerido
Para evitar fallos de conexión, inicie los servicios en este orden:
1. `api-gateway-dev` (8080)
2. `user-service` (8081)
3. `product-service` (8082)
4. `order-service` (8084)

## Persistencia
Cada microservicio es dueño de su propio esquema de datos para garantizar el **Loose Coupling** (Acoplamiento Débil). Se utiliza PostgreSQL como motor de base de datos principal.

## Comandos Globales Maven
- Compilar todo: `mvn clean install`
- Saltar tests: `mvn install -DskipTests`
