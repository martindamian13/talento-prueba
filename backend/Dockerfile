# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo de dependencias y el archivo de lock de npm al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el contenido del proyecto al directorio de trabajo
COPY . .

# Compila el proyecto
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Define el comando por defecto para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]
