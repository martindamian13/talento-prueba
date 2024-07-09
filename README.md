# Task Management Application

## Tecnologías utilizadas

- Backend: NestJS, TypeORM, PostgreSQL
- Frontend: Nuxt.js, Tailwind CSS, Element Plus
- Autenticación: JWT

## Requisitos previos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- PostgreSQL

## Configuración del proyecto

### Backend

1. Clona el repositorio:

```bash
   git clone <URL_DE_TU_REPOSITORIO>
   cd backend
```

2. Instala las dependencias:

``` bash
    npm install
```

3. Configura las variables de entorno:

Crea un archivo .env en la raíz del directorio del backend con el siguiente contenido:


```
    PORT = 8000
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USERNAME=tu_usuario
    DATABASE_PASSWORD=tu_contraseña
    DATABASE_NAME=aptechnology
    JWT_SECRET=tu_secreto_jwt
```

4. Ejecuta las migraciones de la base de datos (si es necesario):

``` bash
npm run typeorm migration:run
```    
    
5. Inicia el servidor NestJS:


```bash
npm run start:dev
```

El servidor se ejecutará en http://localhost:8000.


### Frontend
1. Navega al directorio del frontend:

```bash
cd frontend
```
2. Instala las dependencias:

```bash
npm install
```

3. Configura Axios:

Asegúrate de que el archivo nuxt.config.ts en el directorio del frontend tenga la configuración correcta para Axios:

```typescript
export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css',
    'element-plus/dist/index.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs-alt/axios',
  ],
  axios: {
    baseURL: 'http://localhost:3000', // Asegúrate de que esta URL apunta al backend local
  },
  plugins: [
    '@/plugins/element-plus',
  ],
  build: {
    transpile: ['element-plus'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
```
4. Inicia el servidor Nuxt.js:

```bash
npm run dev
```
El frontend se ejecutará en http://localhost:3000.

### Estructura del proyecto
#### Backend
```css
task-management-backend/
├── src/
│   ├── auth/
│   ├── tasks/
│   ├── app.module.ts
│   └── main.ts
├── .env
├── nest-cli.json
├── package.json
└── tsconfig.json
```
#### Frontend
```css
task-management-frontend/
├── assets/
│   └── css/
│       └── tailwind.css
├── components/
│   ├── LoginForm.vue
│   ├── RegisterForm.vue
│   └── TaskList.vue
├── middleware/
│   └── auth.ts
├── pages/
│   ├── index.vue
│   └── tasks.vue
├── plugins/
│   └── element-plus.ts
├── nuxt.config.ts
├── tailwind.config.js
├── package.json
└── tsconfig.json
```





