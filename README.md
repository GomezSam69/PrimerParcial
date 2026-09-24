# Pulso · Noticias y actualidad

**Nombre del estudiante:** Samuel Perez Gomez 

**API asignada:** NewsAPI – Noticias y actualidad (https://newsapi.org/)

**Endpoint utilizado:**
`https://newsapi.org/v2/everything?q={categoría}&language=es&sortBy=publishedAt&pageSize=30&apiKey={API_KEY}`

## Descripción de la aplicación
Pulso es un portal de noticias en español. Al abrir la página consulta NewsAPI y muestra las últimas publicaciones como tarjetas. Se puede navegar por secciones (Actualidad, Tecnología, Deportes, Economía, Salud, Ciencia y Cultura), buscar, ordenar y ver más información de cada nota. Su diseño es de periódico digital y es responsive (computador, tablet y celular).

## Componentes desarrollados
- `App`: estado principal, petición a la API con `fetch()` dentro de `useEffect()`, filtrado y orden.
- `Header`: cabecera con el nombre del portal y la fecha del día.
- `CategoryTabs`: botones para cambiar de sección.
- `SearchBar`: campo de búsqueda.
- `Toolbar`: contador de resultados, selector de orden y botón "Limpiar filtros".
- `NewsCard`: tarjeta de cada noticia, con "Ver detalles / Ocultar detalles".
- `Loader`: mensaje "Cargando información..." con indicador giratorio.
- `Footer`: pie de página con el crédito a NewsAPI.

## Datos utilizados de la API
`title`, `description`, `urlToImage`, `source.name`, `publishedAt`, `author`, `content` y `url`.

## Funcionalidad de búsqueda o filtro
- Búsqueda por texto sobre título, descripción y nombre del medio.
- Cambio de sección (categoría), que vuelve a consultar la API.

## Funcionalidad adicional implementada
- Ver detalles / Ocultar detalles en cada tarjeta.
- Ordenar por más recientes, más antiguas o medio (A–Z).
- Contador de resultados.
- Limpiar filtros.

## Cómo ejecutar el proyecto
1. Consigue una API key gratuita en https://newsapi.org/register
2. Instala las dependencias: `npm install`
3. Copia `.env.example` a `.env` y pega tu clave en `VITE_NEWS_API_KEY`
4. Inicia el proyecto: `npm run dev`

> El plan gratuito de NewsAPI solo permite peticiones desde `localhost` y un máximo de 100 por día.
