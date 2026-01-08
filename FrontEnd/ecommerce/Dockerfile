# Stage 1: Build de React
FROM node:20-alpine AS build

WORKDIR /app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package*.json ./

RUN npm install

# Copiar todo el código fuente
COPY . .

# Construir la app de React en modo producción
RUN npm run build

# Stage 2: Servir con Nginx
FROM nginx:alpine

# Copiar build final de React a la carpeta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
