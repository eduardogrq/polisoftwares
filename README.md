# Apps Frontend

Este es el frontend de la aplicación de búsqueda de aplicaciones, desarrollado con **React**, **TypeScript** y **Next.js**.

## 📂 Estructura del Proyecto

```
src/app/apps
  ├── page.tsx
  ├── components/
  │   ├── AppItem.tsx
  │   ├── LoadingDots.tsx
  │   ├── SearchInput.tsx
  ├── icons/
  │   ├── SearchIcon.tsx
```

## 🚀 Instalación y Uso

### 1️⃣ Instalación de Dependencias
Este proyecto usa **Yarn** como gestor de paquetes. Para instalar las dependencias, ejecuta:

```sh
yarn install
```

### 2️⃣ Ejecución en Desarrollo
Para correr el proyecto en modo desarrollo:

```sh
yarn dev
```

El servidor se ejecutará en `http://localhost:3000` por defecto.

### 3️⃣ Construcción para Producción
Para generar los archivos optimizados para producción:

```sh
yarn build
```

Para ejecutar la versión construida:

```sh
yarn start
```

## 🛠️ Tecnologías Usadas
- **React** (con hooks)
- **TypeScript**
- **Next.js** (App Router)
- **Axios** (para llamadas HTTP)
- **Tailwind CSS** (para estilos)

## 📌 Funcionalidades Principales
- **Búsqueda de aplicaciones** con debounce para optimizar llamadas a la API.
- **Autocomplete dinámico** con sugerencias basadas en la búsqueda.
- **Interfaz limpia y accesible**, con manejo de estados de carga y errores.

## Repositorio

- **Podemos realizar la clonación del código del repositorio: https://github.com/eduardogrq/polisoftwares.git